// app/(site)/blog/page.tsx
import Image from "next/image"
import Link from "next/link"
import { getAllBlogs } from "@/lib/api/blogs"
import { Calendar, ChevronsRight } from "lucide-react"

export const metadata = {
    title: 'Our Blog | A&T Infracon',
    description: 'Latest news, insights, and updates from A&T Infracon on infrastructure, construction, and engineering.',
};

export default async function BlogPage() {
    const blogs = await getAllBlogs();
    const featuredBlog = blogs.length > 0 ? blogs[0] : null;
    const otherBlogs = blogs.length > 1 ? blogs.slice(1) : [];

    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="relative h-[40vh] sm:h-[50vh] min-h-[320px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                        alt="A&T Infracon Blog"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-3xl text-white">
                        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] font-medium font-headline mb-4">
                            Insights & Updates
                        </h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/90">
                            Your source for the latest in construction technology, infrastructure trends, and A&T Infracon news.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">BLOG</span>
                    </nav>
                </div>
            </div>

            {/* ---------- MAIN BLOG CONTENT ---------- */}
            <section className="bg-white py-12 sm:py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    {blogs.length === 0 ? (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-semibold text-gray-700">No blog posts found</h2>
                            <p className="text-gray-500 mt-4">
                                Please check back later for updates and insights from our team.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* Featured Blog */}
                            {featuredBlog && (
                                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-full w-full rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src={featuredBlog.featured_image || 'https://via.placeholder.com/800x600'}
                                            alt={featuredBlog.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>

                                    <div className="lg:py-6">
                                        <p className="text-sm text-gray-500 mb-2 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {new Date(featuredBlog.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric'
                                            })}
                                        </p>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                                            <Link href={`/blog/${featuredBlog.slug}`}>
                                                {featuredBlog.title}
                                            </Link>
                                        </h2>
                                        {featuredBlog.excerpt && (
                                            <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                                                {featuredBlog.excerpt}
                                            </p>
                                        )}
                                        <Link
                                            href={`/blog/${featuredBlog.slug}`}
                                            className="inline-flex items-center gap-2 text-red-600 font-semibold group"
                                        >
                                            Read More
                                            <ChevronsRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            )}

                            {/* Separator */}
                            {otherBlogs.length > 0 && (
                                <div className="border-b border-gray-200"></div>
                            )}

                            {/* Other Blogs Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {otherBlogs.map((blog) => (
                                    <article key={blog.id} className="group flex flex-col">
                                        <div className="relative h-56 w-full rounded-lg overflow-hidden shadow-md mb-5">
                                            <Image
                                                src={blog.featured_image || 'https://via.placeholder.com/600x400'}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col">
                                            <p className="text-xs text-gray-500 mb-2 flex items-center">
                                                <Calendar className="w-3 h-3 mr-1.5" />
                                                {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric', month: 'short', day: 'numeric'
                                                })}
                                            </p>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-1 group-hover:text-red-600 transition-colors">
                                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h3>
                                            {blog.excerpt && (
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                    {blog.excerpt}
                                                </p>
                                            )}
                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                className="text-red-600 text-sm font-semibold group-hover:underline"
                                            >
                                                Continue Reading &rarr;
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ---------- CONNECT WITH A&T SECTION ---------- */}
            <section className="bg-[#edf3f5] py-12 sm:py-16 md:py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    <h2 className="text-2xl sm:text-3xl font-light text-[#2d3b40] mb-4">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                        Let's build the future together. Get in touch with our experts to discuss your infrastructure needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}