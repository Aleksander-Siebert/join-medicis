import { NextResponse } from "next/server";
import { incrementSkillDownload } from "@/lib/skill-stats";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const downloads = await incrementSkillDownload(slug);
  return NextResponse.json({ slug, downloads });
}
