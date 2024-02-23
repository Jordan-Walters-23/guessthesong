import SongSelection from "@/components/SongSelection";
import TranslatedLyrics from "@/components/TranslatedLyrics";
import Page2Nav from "@/components/Page2Nav";


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
