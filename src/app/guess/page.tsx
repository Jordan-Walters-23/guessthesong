import { GuessSong, TranslatedLyrics, Page2Nav } from "@/components";



// `app/guess/page.tsx` is the UI for the `/guess` URL
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-600 to-teal-950">
      <GuessSong />
      <TranslatedLyrics />
      <Page2Nav />
    </div>
  );
}
