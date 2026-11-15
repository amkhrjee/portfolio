import Thought from "@/components/ui/thought";
import { thoughts } from "@/lib/mongo";

export const dynamic = "force-dynamic";

export default async function Thoughts() {
  // ponytail: loads every thought; add pagination when the list gets long
  const all = await thoughts.find().sort({ createdAt: -1 }).toArray();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <p className="text-4xl mb-2 font-bold">thoughts</p>
        <p>because twitter is not my cup of tea</p>
      </div>
      {all.map((t) => (
        <Thought key={t._id.toString()} content={t.content} createdAt={t.createdAt} timeZone={t.timeZone} location={t.location} />
      ))}
    </div>
  );
}
