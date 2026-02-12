export const dynamic = "force-static";
export const revalidate = false;

import { contentService } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-generate all blog pages
 */
export async function generateStaticParams() {
  const posts = await contentService.getPosts();

  if (!posts || posts.length === 0) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;

  const post = await contentService.getPost(slug);

  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      <article className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="px-6 sm:px-10 py-8 sm:py-12">
          <header className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
              {post.title}
            </h1>

            <time
              dateTime={post.publishedAt}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}
