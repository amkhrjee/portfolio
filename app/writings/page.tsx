import { Link } from "@heroui/link";

export default function BlogIndexPage() {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Posts</h1>
      <ul>
        <li>
          <p className="mt-2">
            <Link className="text-xl" underline="hover" href="/writings//t-sne">
              t-SNE: one step at a time
            </Link>
          </p>
        </li>
      </ul>
    </section>
  );
}
