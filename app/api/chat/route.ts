import { google } from "@ai-sdk/google";
import { frontendTools } from "@assistant-ui/react-ai-sdk";
import {
  convertToModelMessages,
  streamText,
  type JSONSchema7,
  type UIMessage,
} from "ai";

import { DEMO_SYSTEM_PROMPT } from "./system-prompt";

export async function POST(req: Request) {
  const {
    messages,
    system,
    tools,
  }: {
    messages: UIMessage[];
    system?: string;
    tools?: Record<string, { description?: string; parameters: JSONSchema7 }>;
  } = await req.json();

  const result = streamText({
    model: google("gemini-flash-latest"),
    messages: await convertToModelMessages(messages),
    tools: {
      ...frontendTools(tools ?? {}),
    },
    system: system
      ? `${DEMO_SYSTEM_PROMPT}\n\nAdditional instructions from the client:\n${system}`
      : DEMO_SYSTEM_PROMPT,
  });

  return result.toUIMessageStreamResponse();
}
