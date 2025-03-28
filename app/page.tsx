import HomeProvider from "@/components/ui/home-provider";
import Spotify from "@/components/ui/spotify";

export const revalidate = 60;

export default function Home() {
  return (
    <HomeProvider>
      <Spotify />
    </HomeProvider>
  );
}
