import { NextResponse } from "next/server";
import { getSkillStats, isKnownSkillSlug } from "@/lib/skill-stats";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!isKnownSkillSlug(slug)) {
    return NextResponse.json({ error: "Unknown skill" }, { status: 404 });
  }
  const stats = await getSkillStats(slug);
  return NextResponse.json({ slug, ...stats });
}
