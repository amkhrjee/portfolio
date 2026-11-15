import { Card } from "@heroui/react";
import { Cedarville_Cursive } from "next/font/google";
import { LuCalendar, LuMapPin } from "react-icons/lu";

import type { ThoughtDoc } from "@/lib/mongo";

const cursiveFont = Cedarville_Cursive({ weight: "400" });

const formatDate = (date: Date, timeZone = "Asia/Kolkata") =>
  new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(date);

// Only http(s) URLs become links; trailing punctuation stays outside the link
const urlPattern = /(https?:\/\/[^\s]*[^\s.,!?;:)\]'"])/;

export default function Thought({ content, createdAt, timeZone, location }: ThoughtDoc) {
  return (
    <Card variant="tertiary" className="sm:w-1/2 w-full">
      <Card.Header className="text-sm flex-row gap-4 items-center justify-between">
        <span className="flex items-center">
          <span className="inline-block mr-2">
            <LuCalendar />
          </span>
          <span>{formatDate(createdAt, timeZone)}</span>
        </span>
        {location && (
          <span className="flex items-center">
            <span className="inline-block mr-2">
              <LuMapPin />
            </span>
            {location}
          </span>
        )}
      </Card.Header>
      <Card.Content className={`${cursiveFont.className} text-lg whitespace-pre-wrap break-words`}>
        {content.split(urlPattern).map((part, i) =>
          i % 2 ? (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline">
              {part}
            </a>
          ) : (
            part
          ),
        )}
      </Card.Content>
    </Card>
  );
}
