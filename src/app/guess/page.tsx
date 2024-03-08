import { GuessSong, TranslatedLyrics, Page2Nav } from '@/components'

// `app/guess/page.tsx` is the UI for the `/guess` URL
export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-600 to-teal-950'>
      <h1 className='text-2xl font-bold tracking-tighter'>Have a guess</h1>
      <GuessSong />
      <TranslatedLyrics />
      <Page2Nav />
    </div>
  )
}
