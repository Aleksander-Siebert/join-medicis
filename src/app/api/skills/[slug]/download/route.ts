import { NextResponse } from "next/server";
import {
  incrementSkillDownload,
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
  if (!(await checkRateLimit(ip, "download"))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const downloads = await incrementSkillDownload(slug);
  return NextResponse.json({ slug, downloads });
}
