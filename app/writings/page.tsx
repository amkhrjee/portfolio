import { Link } from "@heroui/react";

export default function BlogIndexPage() {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Posts</h1>
      <ul>
        <li>
          <p className="mt-2">
            <Link className="text-xl hover:underline" href="/writings//t-sne">
              t-SNE: one step at a time
            </Link>
          </p>
        </li>
      </ul>
    </section>
  );
}
