import { notFound, permanentRedirect } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, postHref } from "@/lib/blog";
import { authors } from "@/lib/data";
import type { Metadata } from "next";
import ArticleView from "@/components/blog/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  // Article rattaché à une collection : l'URL canonique est la version imbriquée.
  return {
    alternates: { canonical: postHref(post) },
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Les articles rattachés à une collection vivent désormais sous
  // /blog/collections/{collection}/{slug} : on redirige (308) les anciennes URLs.
  if (post.collection) permanentRedirect(postHref(post));

  const author = authors.find((a) => a.slug === post.authorSlug);
  const canonicalPath = `/blog/${slug}`;

  return (
    <ArticleView
      post={post}
      author={author}
      canonicalPath={canonicalPath}
      breadcrumb={[
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: canonicalPath },
      ]}
    />
  );
}
