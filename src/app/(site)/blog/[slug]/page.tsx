// app/(site)/blog/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { getBlogBySlug, getBlogSlugs, getAllBlogs } from "@/lib/api/blogs"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, Clock, Facebook, Twitter, Linkedin, Mail, Link2 } from "lucide-react"
import ShareButtons from "@/components/ShareButtons" // ⭐ Import the client component

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

    // Get the full URL for sharing
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
    const fullUrl = `${baseUrl}/blog/${params.slug}`;

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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-apfel2 mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(blog.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </span>
                            {blog.reading_time && (
                                <>
                                    <span className="text-white/50">•</span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        {blog.reading_time} min read
                                    </span>
                                </>
                            )}
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

                        {/* ⭐ Share Button Component */}
                        <ShareButtons url={fullUrl} title={blog.title} />
                    </nav>
                </div>
            </div>

            {/* ---------- MAIN ARTICLE & SIDEBAR ---------- */}
            <section className="bg-white py-12 sm:py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Main Blog Content */}
                        <article className="lg:col-span-8">
                            {/* Article Meta Info Box */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-gray-500" />
                                        Published: {new Date(blog.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </span>
                                    {blog.reading_time && (
                                        <>
                                            <span className="text-gray-400">|</span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4 text-gray-500" />
                                                {blog.reading_time} minute{blog.reading_time !== 1 ? 's' : ''} read
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Excerpt */}
                            {blog.excerpt && (
                                <p className="text-lg text-gray-600 italic border-l-4 border-red-500 pl-6 mb-8">
                                    {blog.excerpt}
                                </p>
                            )}

                            {/* Main content from Jodit */}
                            <div
                                className="prose prose-lg max-w-none prose-h2:font-semibold prose-h2:text-gray-800 prose-a:text-red-600 prose-img:rounded-lg prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* ⭐ Share Section at Bottom */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Enjoyed this article? Share it with your network
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            aria-label="Share on Facebook"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(blog.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                                            aria-label="Share on Twitter"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`mailto:?subject=${encodeURIComponent(blog.title)}&body=Check out this article: ${fullUrl}`}
                                            className="p-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                            aria-label="Share via Email"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                                                        {recentBlog.title}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                        <span>
                                                            {new Date(recentBlog.created_at).toLocaleDateString('en-US', {
                                                                month: 'short', day: 'numeric', year: 'numeric'
                                                            })}
                                                        </span>
                                                        {recentBlog.reading_time && (
                                                            <>
                                                                <span>•</span>
                                                                <span>{recentBlog.reading_time} min</span>
                                                            </>
                                                        )}
                                                    </div>
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