"use client";
import { Button, Form, Input, Label, Spinner, TextArea, TextField } from "@heroui/react";
import { useState } from "react";
import { LuUpload } from "react-icons/lu";

// Browser location -> "City, Country". Undefined if denied or unavailable; the post still goes through.
async function getLocation(): Promise<string | undefined> {
  try {
    const { coords } = await new Promise<GeolocationPosition>((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 }),
    );
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`,
    );
    const place = await res.json();
    return [place.city || place.locality, place.countryName].filter(Boolean).join(", ") || undefined;
  } catch {
    return undefined;
  }
}

export default function ThoughtForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const content = data.get("content");
    if (!content) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/thoughts", {
        method: "POST",
        body: JSON.stringify({
          password: data.get("password"),
          content,
          createdAt: new Date().toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          location: await getLocation(),
        }),
      });
      // Clear only the thought so the password stays for the next post
      if (response.ok) (form.elements.namedItem("content") as HTMLTextAreaElement).value = "";
      setStatus(
        response.ok ? "Posted" : response.status === 401 ? "Wrong password" : `Could not post (${response.status})`,
      );
    } catch {
      setStatus("Could not post; something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <Form className="sm:w-1/2 w-full" onSubmit={handleSubmit}>
        <TextField type="text">
          <Label className="font-bold text-lg mb-2">Thought</Label>
          <TextArea id="content" name="content" placeholder="blah blah" className="h-40" />
        </TextField>
        <TextField className="mt-2">
          <Label className="font-bold">Password</Label>
          <Input name="password" type="password" autoComplete="current-password" required />
        </TextField>
        <div className="mt-2 flex justify-between items-center w-full">
          <span role="status" className="text-sm">
            {status}
          </span>
          <Button isDisabled={isLoading} type="submit">
            {isLoading ? <Spinner color="current" /> : <LuUpload />}
            {isLoading ? <span>Posting</span> : <span>Post</span>}
          </Button>
        </div>
      </Form>
    </div>
  );
}
