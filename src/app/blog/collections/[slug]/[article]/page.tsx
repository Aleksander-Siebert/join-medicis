import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getCollectionBySlug } from "@/lib/collections";
import { authors } from "@/lib/data";
import ArticleView from "@/components/blog/ArticleView";

type Params = { slug: string; article: string };
type Props = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return getAllPosts()
    .filter((p) => p.collection)
    .map((p) => ({ slug: p.collection as string, article: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, article } = await params;
  const post = getPostBySlug(article);
  if (!post || post.collection !== slug) return {};
  return {
    alternates: { canonical: `/blog/collections/${slug}/${article}` },
    title: post.title,
    description: post.excerpt,
  };
}

export default async function CollectionArticlePage({ params }: Props) {
  const { slug, article } = await params;
  const post = getPostBySlug(article);
  const collection = getCollectionBySlug(slug);

  // L'article doit exister ET appartenir à cette collection.
  if (!post || !collection || post.collection !== slug) notFound();

  const author = authors.find((a) => a.slug === post.authorSlug);
  const canonicalPath = `/blog/collections/${slug}/${article}`;

  return (
    <ArticleView
      post={post}
      author={author}
      canonicalPath={canonicalPath}
      breadcrumb={[
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: collection.label, path: `/blog/collections/${slug}` },
        { name: post.title, path: canonicalPath },
      ]}
    />
  );
}
