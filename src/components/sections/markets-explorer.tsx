"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bolt, Leaf, Factory, Pickaxe, Shield, Atom } from "lucide-react";
import { marketsData, demoProjects } from "@/lib/data";
import { cn } from "@/lib/utils";
/* ---------------- Types ---------------- */

type MarketKey =
    | "Energy"
    | "Environmental Cleanup"
    | "Manufacturing & Technology"
    | "Mining & Critical Minerals"
    | "National Defense & Security"
    | "Nuclear"
    | "Infrastructure"
    | "Renewables";

type ProjectImage = {
    imageUrl: string;
    description?: string;
    imageHint?: string;
};

type Project = {
    id: string | number;
    title: string;
    location?: string;
    description?: string;
    image: ProjectImage;
    market: MarketKey;
    href?: string;
};

type MarketContent = {
    key: MarketKey;
    title: string;
    description: string;
    hero: { imageUrl: string; alt: string };
    icon?: React.ComponentType<{ className?: string }>;
};

/**
 * Main component: categories carousel + sticky left hero + right project list per market.
 */
export default function MarketsExplorer({
    markets = marketsData,
    projects = demoProjects,
}: {
    markets?: MarketContent[];
    projects?: Project[];
}) {
    const [selectedMarket, setSelectedMarket] = useState<MarketKey>(markets[0].key);
    const [topOffset, setTopOffset] = useState(0);
    const filterBarRef = useRef<HTMLDivElement>(null);
    // Group projects by market
    const projectsByMarket = useMemo(() => {
        const map = new Map<MarketKey, Project[]>();
        markets.forEach((m) => map.set(m.key, []));
        projects.forEach((p) => {
            if (!map.has(p.market)) map.set(p.market, []);
            map.get(p.market)?.push(p);
        });
        return map;
    }, [projects, markets]);

    // Refs to each market section for scroll-into-view
    const sectionRefs = useRef<Record<MarketKey, HTMLDivElement | null>>(
        markets.reduce(
            (acc, m) => ({ ...acc, [m.key]: null }),
            {} as Record<MarketKey, HTMLDivElement | null>
        )
    );
    useEffect(() => {
        let last = window.scrollY;
        const onScroll = () => {
            const cur = window.scrollY;
            if (cur < last) {
                // user scrolling up → header becomes visible → push sticky bar down by navbar height
                setTopOffset(80); // your header height (h‑20 ≈ 80px)
            } else if (cur > last) {
                // scrolling down → header hides → reset
                setTopOffset(0);
            }
            last = cur;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        function updateActive() {
            const barBottom = filterBarRef.current?.getBoundingClientRect().bottom || 0;
            const lineY = barBottom + 16; // bar ke just neeche ek invisible line ke jaise

            let bestKey: MarketKey | null = null;
            let closest = Infinity;

            markets.forEach((m) => {
                const el = sectionRefs.current[m.key];
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const top = rect.top;
                const bottom = rect.bottom;

                // Agar section us line ko cross kar raha hai:
                if (top <= lineY && bottom >= lineY) {
                    bestKey = m.key;
                    closest = 0;
                } else {
                    // warna distance dekho
                    const dist = Math.abs(top - lineY);
                    if (dist < closest) {
                        closest = dist;
                        bestKey = m.key;
                    }
                }
            });

            if (bestKey && bestKey !== selectedMarket) {
                setSelectedMarket(bestKey);
            }
        }

        const onScroll = () => updateActive();
        const onResize = () => updateActive();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        setTimeout(updateActive, 100);
        requestAnimationFrame(updateActive);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [markets]);
    return (
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {/* Sticky categories bar */}
                <div
                    ref={filterBarRef}
                    className="sticky left-0 right-0 z-50 transition-all duration-300"
                    style={{ top: `${topOffset}px` }}
                >
                    <CategoriesBar
                        markets={markets}
                        selected={selectedMarket}
                        onSelect={(key) => {
                            setSelectedMarket(key);
                            const el = sectionRefs.current[key];
                            el?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                    />
                </div>

                {/* Markets sections */}
                <div className="mt-8 sm:mt-10 md:mt-12 space-y-16 sm:space-y-20 md:space-y-24">
                    {markets.map((m) => {
                        const list = projectsByMarket.get(m.key) || [];
                        return (
                            <div
                                key={m.key}
                                id={`market-${slugify(m.key)}`}
                                data-market-key={m.key}
                                ref={(el) => (sectionRefs.current[m.key] = el)}
                                className="scroll-mt-24 sm:scroll-mt-28"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                                    {/* Left sticky hero */}
                                    <div className="lg:col-span-6">
                                        <div className="lg:sticky top-24">
                                            <MarketHeroCard market={m} />
                                        </div>
                                    </div>

                                    {/* Right project list */}
                                    <div className="lg:col-span-6">
                                        <div className="mb-4 sm:mb-6 flex items-end justify-between">
                                            <h3 className="text-[10px] sm:text-xs font-semibold tracking-widest text-foreground/70 uppercase">
                                                Select {m.title} Projects
                                            </h3>
                                            <div className="h-px bg-border w-1/2" />
                                        </div>

                                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                            {list.map((p) => (
                                                <ProjectCard key={p.id} project={p} />
                                            ))}
                                            {list.length === 0 && (
                                                <div className="rounded-xl border bg-card text-muted-foreground p-4 sm:p-6">
                                                    No projects found in {m.title}. Add some with market: "{m.key}".
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function CategoriesBar({
    markets,
    selected,
    onSelect,
}: {
    markets: MarketContent[];
    selected: MarketKey;
    onSelect: (key: MarketKey) => void;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative bg-[#edf3f5] shadow-sm">
            <div
                ref={scrollRef}
                className="flex space-x-2 sm:space-x-3 py-2 sm:py-3 overflow-x-auto overflow-y-hidden scroll-smooth
                   scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
                style={{
                    minWidth: "100%",
                    width: "100%",
                    borderRadius: 0,
                }}
            >
                {markets.map((m) => {
                    const Icon = m.icon || Bolt;
                    const isActive = selected === m.key;
                    return (
                        <button
                            key={m.key}
                            onClick={() => onSelect(m.key)}
                            className={cn(
                                "flex items-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2",
                                "text-xs sm:text-sm font-semibold border-2 whitespace-nowrap flex-shrink-0",
                                "transition-all duration-200",
                                isActive
                                    ? "bg-red-600 text-white border-red-600"
                                    : "bg-white text-gray-800 border-slate-200 hover:bg-red-50 hover:border-red-300"
                            )}
                        >
                            <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            {m.key.toUpperCase()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function MarketHeroCard({ market }: { market: MarketContent }) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-md">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <Image
                    src={market.hero.imageUrl}
                    alt={market.hero.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow">
                        {market.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/85 max-w-xl">
                        {market.description}
                    </p>
                </div>

                <Link
                    href={`/markets/${slugify(market.key)}`}
                    aria-label={`${market.title} details`}
                    className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 
                               inline-flex h-9 w-9 sm:h-12 sm:w-12 
                               items-center justify-center 
                               rounded-full bg-red-600 text-white 
                               shadow-lg transition-transform hover:scale-110"
                >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-card shadow-md">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] w-full">
                <Image
                    src={project.image.imageUrl}
                    alt={project.image.description || project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                {project.location && (
                    <div className="absolute left-3 sm:left-4 top-2 sm:top-3 z-10 
                                   text-[10px] sm:text-[12px] font-semibold 
                                   tracking-widest text-yellow-400 uppercase">
                        {project.location}
                    </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                    <div
                        className="transform transition-transform duration-500 ease-in-out 
                                   translate-y-12 group-hover:translate-y-0"
                    >
                        <h4 className="text-white text-xl sm:text-2xl font-semibold drop-shadow">
                            {project.title}
                        </h4>
                        <p
                            className="text-xs sm:text-sm text-white/90 
                                       opacity-0 translate-y-3 
                                       group-hover:opacity-100 group-hover:translate-y-0
                                       transition-all duration-500 ease-in-out mt-1 sm:mt-2"
                        >
                            {project.description}
                        </p>
                    </div>
                </div>

                <Link
                    href={`/projects/${slugify(project.title)}`}
                    aria-label={`${project.title} details`}
                    className="absolute bottom-2 sm:bottom-3 -rotate-[19deg] right-2 sm:right-3 z-10 
                               inline-flex h-8 w-8 sm:h-11 sm:w-11 
                               items-center justify-center 
                               rounded-full bg-red-600 text-white 
                               shadow-lg transition-transform hover:scale-110"
                >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
            </div>
        </div>
    );
}

/* ---------- Utils ---------- */

function slugify(str: string) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}