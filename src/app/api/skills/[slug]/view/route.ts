import { NextResponse } from "next/server";
import { incrementSkillView } from "@/lib/skill-stats";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const views = await incrementSkillView(slug);
  return NextResponse.json({ slug, views });
}
