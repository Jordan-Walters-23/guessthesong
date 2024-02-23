import { SelectLanguage, EnterSong, Page1Nav } from "@/components";


// `app/choose/page.tsx` is the UI for the `/choose` URL
export default function Page() {
  return (
    <>
      <SelectLanguage />
      <EnterSong />
      <Page1Nav /> 
    </>
  );
}
