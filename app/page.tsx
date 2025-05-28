import HomeProvider from "@/components/ui/home-provider";

export const revalidate = 60;

export default function Home() {
  return (
    <HomeProvider>
      {/* <Spotify /> */}
      <div></div>
    </HomeProvider>
  );
}
