"use client";

import { Card } from "@heroui/react";
import { Assistant } from "../assistant";

export default function Chat() {
  return (
    <div className="-mx-4 flex h-[calc(100dvh-5rem)] w-[calc(100%+2rem)] flex-col px-0 pb-4 pt-2 sm:mx-auto sm:w-full sm:max-w-4xl">
      <Card className="flex-1 overflow-hidden border-default/60 bg-background shadow-sm">
        <Card.Content className="h-full p-0">
          <Assistant className="h-full" />
        </Card.Content>
      </Card>
    </div>
  );
}
