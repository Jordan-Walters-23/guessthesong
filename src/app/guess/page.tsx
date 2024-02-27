import { SongSelection, TranslatedLyrics, Page2Nav } from "@/components";



// `app/guess/page.tsx` is the UI for the `/guess` URL
export default function Page() {
  return (
    <>
      <SongSelection />
      <TranslatedLyrics />
      <Page2Nav />
    </>
  );
}
