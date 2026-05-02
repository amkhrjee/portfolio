"use client";

import type { ComponentProps } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type ToolGroupRootProps = ComponentProps<typeof Collapsible>;

export function ToolGroupRoot({ children, ...props }: ToolGroupRootProps) {
  return <Collapsible {...props}>{children}</Collapsible>;
}

type ToolGroupTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
  count?: number;
  active?: boolean;
};

export function ToolGroupTrigger({
  count,
  active,
  children,
  ...props
}: ToolGroupTriggerProps) {
  return (
    <CollapsibleTrigger aria-expanded={active} {...props}>
      <span className="text-xs text-muted-foreground">
        {count ? `${count} tool call${count === 1 ? "" : "s"}` : "Tool calls"}
      </span>
      {children}
    </CollapsibleTrigger>
  );
}

type ToolGroupContentProps = ComponentProps<typeof CollapsibleContent>;

export function ToolGroupContent({
  children,
  ...props
}: ToolGroupContentProps) {
  return <CollapsibleContent {...props}>{children}</CollapsibleContent>;
}
