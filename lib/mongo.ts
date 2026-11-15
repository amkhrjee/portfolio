import { MongoClient } from "mongodb";

// ponytail: driver connects lazily and pools; no connect/close per request
const client = new MongoClient(process.env.MONGODB_URI!);

export type ThoughtDoc = {
  content: string;
  createdAt: Date;
  timeZone?: string; // browser's IANA zone at post time, so the card shows local time
  location?: string;
};
export const thoughts = client.db("portfolio").collection<ThoughtDoc>("thoughts");
