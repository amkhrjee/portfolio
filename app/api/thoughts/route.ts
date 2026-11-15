import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

import { thoughts } from "@/lib/mongo";

function isTimeZone(tz: unknown): tz is string {
  try {
    return typeof tz === "string" && !!new Intl.DateTimeFormat("en", { timeZone: tz });
  } catch {
    return false;
  }
}

const sha = (s: string) => createHash("sha256").update(s).digest();

export async function POST(req: Request) {
  const { password, content, createdAt, timeZone, location } = await req.json().catch(() => ({}));
  // No password configured = locked, not open
  const expected = process.env.THOUGHTS_PASSWORD;
  if (!expected || typeof password !== "string" || !timingSafeEqual(sha(password), sha(expected))) {
    return NextResponse.json({ success: false, message: "wrong password" }, { status: 401 });
  }
  if (typeof content !== "string" || !content.trim() || content.length > 5000) {
    return NextResponse.json(
      { success: false, message: "content must be 1-5000 characters" },
      { status: 400 },
    );
  }
  // Time, zone and location come from the browser; fall back rather than reject
  const date = new Date(createdAt);
  await thoughts.insertOne({
    content: content.trim(),
    createdAt: isNaN(date.getTime()) ? new Date() : date,
    ...(isTimeZone(timeZone) && { timeZone }),
    ...(typeof location === "string" && location.trim() && { location: location.trim().slice(0, 100) }),
  });
  return NextResponse.json({ success: true });
}
