export const dynamic = "force-static";
import { contentService } from "@/lib/api";
import { BlogCard } from "../../components/BlogCard";

export default async function BlogPage() {
  const posts = await contentService.getPosts();

  console.log(posts);

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <h1>Blog</h1>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            slug={post.slug || ""}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </main>
  );
}
