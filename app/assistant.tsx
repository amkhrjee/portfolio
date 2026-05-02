"use client";

import { Thread } from "@/components/assistant-ui/thread";
import { cn } from "@/lib/utils";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  AssistantChatTransport,
  useChatRuntime,
} from "@assistant-ui/react-ai-sdk";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";

type AssistantProps = {
  className?: string;
};

export const Assistant = ({ className }: AssistantProps) => {
  const runtime = useChatRuntime({
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className={cn("h-full", className)}>
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
};
