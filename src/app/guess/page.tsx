import { SongSelection, TranslatedLyrics, Page2Nav } from "@/components";



// `app/guess/page.tsx` is the UI for the `/guess` URL
export default function Page() {
  return (
    <div className="h-screen grid place-item-center bg-gradient-to-b from-teal-600 to-teal-950">
      <SongSelection />
      <TranslatedLyrics />
      <Page2Nav />
    </div>
  );
}
