export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`mx-auto flex w-full  flex-col gap-6 py-10 `}>
      {children}
    </main>
  );
}
