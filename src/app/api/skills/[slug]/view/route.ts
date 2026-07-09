import { NextResponse } from "next/server";
import {
  incrementSkillView,
  isKnownSkillSlug,
  checkRateLimit,
} from "@/lib/skill-stats";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!isKnownSkillSlug(slug)) {
    return NextResponse.json({ error: "Unknown skill" }, { status: 404 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!(await checkRateLimit(ip, "view"))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const views = await incrementSkillView(slug);
  return NextResponse.json({ slug, views });
}
