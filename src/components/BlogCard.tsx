"use client";

import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
}

export function BlogCard({ id, slug, title, description }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      key={id}
      href={`/blog/${slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 24,
        transition: "all 0.2s",
        boxShadow: isHovered
          ? "0 4px 12px rgba(0,0,0,0.15)"
          : "0 1px 3px rgba(0,0,0,0.1)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ marginBottom: 8, fontSize: 20, fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{description}</p>
    </Link>
  );
}
