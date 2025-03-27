import HomeProvider from "@/components/ui/home-provider";
import Spotify from "@/components/ui/spotify";

export default function Home() {
  return (
    <HomeProvider>
      <Spotify />
    </HomeProvider>
  );
}
