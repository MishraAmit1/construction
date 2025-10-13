// app/(site)/blog/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { getBlogBySlug, getBlogSlugs, getAllBlogs } from "@/lib/api/blogs"
import { notFound } from "next/navigation"
import { Calendar, ChevronsRight, ArrowLeft, Share2 } from "lucide-react"

// Generate static params for faster builds
export async function generateStaticParams() {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug);
    if (!blog) return {};

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        keywords: blog.meta_keywords,
        openGraph: {
            title: blog.meta_title || blog.title,
            description: blog.meta_description || blog.excerpt,
            images: [
                {
                    url: blog.featured_image || '',
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        notFound();
    }

    // Get recent blogs (excluding current)
    const recentBlogs = (await getAllBlogs())
        .filter(b => b.slug !== blog.slug)
        .slice(0, 3);

    return (
        <>
            {/* ---------- HERO SECTION (FEATURED IMAGE) ---------- */}
            <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[350px]">
                {blog.featured_image && (
                    <Image
                        src={blog.featured_image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 h-full flex flex-col justify-end pb-12 sm:pb-16 md:pb-20">
                    <div className="max-w-4xl text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-headline mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center text-white/80 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>
                                Published on {new Date(blog.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200 sticky top-0 z-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center">
                            <Link href="/" className="hover:text-red-600">HOME</Link>
                            <span className="mx-1.5 sm:mx-2">&gt;</span>
                            <Link href="/blog" className="hover:text-red-600">BLOG</Link>
                            <span className="mx-1.5 sm:mx-2">&gt;</span>
                            <span className="text-red-600 font-semibold uppercase truncate max-w-[200px] sm:max-w-none">
                                {blog.title}
                            </span>
                        </div>

                        <button className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                    </nav>
                </div>
            </div>

            {/* ---------- MAIN ARTICLE & SIDEBAR ---------- */}
            <section className="bg-white py-12 sm:py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Main Blog Content */}
                        <article className="lg:col-span-8">
                            {/* Excerpt */}
                            {blog.excerpt && (
                                <p className="text-lg text-gray-600 italic border-l-4 border-red-500 pl-6 mb-8">
                                    {blog.excerpt}
                                </p>
                            )}

                            {/* Main content from TinyMCE */}
                            <div
                                className="prose prose-lg max-w-none prose-h2:font-semibold prose-h2:text-gray-800 prose-a:text-red-600 prose-img:rounded-lg prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>

                        {/* Sidebar with Recent Posts */}
                        <aside className="lg:col-span-4 space-y-8 sticky top-24 self-start">
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-4">
                                    Recent Posts
                                </h3>
                                <ul className="space-y-6">
                                    {recentBlogs.map(recentBlog => (
                                        <li key={recentBlog.id}>
                                            <Link href={`/blog/${recentBlog.slug}`} className="group flex items-start gap-4">
                                                {recentBlog.featured_image && (
                                                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={recentBlog.featured_image}
                                                            alt={recentBlog.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="80px"
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                                                        {recentBlog.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {new Date(recentBlog.created_at).toLocaleDateString('en-US', {
                                                            month: 'short', day: 'numeric', year: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-blue-50 text-blue-900 rounded-lg p-6 border border-blue-200">
                                <h3 className="text-xl font-semibold mb-4">
                                    Have a Project?
                                </h3>
                                <p className="text-sm mb-6">
                                    Let's turn your vision into reality. Contact our experts today for a consultation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ---------- "Back to Blog" CTA ---------- */}
            <section className="bg-[#edf3f5] py-12 text-center">
                <div className="container mx-auto px-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to All Posts
                    </Link>
                </div>
            </section>
        </>
    );
}