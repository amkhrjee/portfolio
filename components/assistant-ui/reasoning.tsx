"use client";

import type { ComponentProps, ReactNode } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type ReasoningRootProps = ComponentProps<typeof Collapsible>;

export function ReasoningRoot({ children, ...props }: ReasoningRootProps) {
  return <Collapsible {...props}>{children}</Collapsible>;
}

type ReasoningTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
  active?: boolean;
};

export function ReasoningTrigger({ active, ...props }: ReasoningTriggerProps) {
  return <CollapsibleTrigger aria-expanded={active} {...props} />;
}

type ReasoningContentProps = ComponentProps<typeof CollapsibleContent>;

export function ReasoningContent({
  children,
  ...props
}: ReasoningContentProps) {
  return <CollapsibleContent {...props}>{children}</CollapsibleContent>;
}

type ReasoningTextProps = {
  children?: ReactNode;
};

export function ReasoningText({ children }: ReasoningTextProps) {
  return (
    <div className="whitespace-pre-wrap text-sm text-muted-foreground">
      {children}
    </div>
  );
}

type ReasoningProps = {
  text?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

export function Reasoning({ text, children }: ReasoningProps) {
  return (
    <div className="whitespace-pre-wrap text-sm text-muted-foreground">
      {text ?? children}
    </div>
  );
}
