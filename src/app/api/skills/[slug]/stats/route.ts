import { NextResponse } from "next/server";
import { getSkillStats } from "@/lib/skill-stats";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const stats = await getSkillStats(slug);
  return NextResponse.json({ slug, ...stats });
}
