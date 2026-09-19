import { cn } from "@/lib/utils";

export type TimelineEntry = {
  period: string;
  title: string;
  organisation: string;
  description: string;
};

type ExperienceTimelineProps = {
  entries: TimelineEntry[];
  className?: string;
};

/** A responsive left-aligned timeline for education and work experience. */
export default function ExperienceTimeline({
  entries,
  className,
}: ExperienceTimelineProps) {
  return (
    <ol
      aria-label="Experience timeline"
      className={cn(
        "relative space-y-8 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-border",
        className,
      )}
    >
      {entries.map((entry) => (
        <li
          className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4"
          key={`${entry.organisation}-${entry.title}`}
        >
          <div
            aria-hidden="true"
            className="col-start-1 row-start-1 z-10 mt-2 size-3 justify-self-center rounded-full bg-border"
          />
          <article className="col-start-2 row-start-1 rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
              {entry.period}
            </p>
            <h3 className="mt-1 font-semibold">{entry.title}</h3>
            <p className="text-sm font-medium text-primary">
              {entry.organisation}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {entry.description}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}
