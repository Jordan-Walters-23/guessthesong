'use client'
import { SelectLanguage, EnterSong, Page1Nav } from '@/components'

// `app/choose/page.tsx` is the UI for the `/choose` URL
export default function Page() {
  return (
    <div className="h-screen grid place-item-center bg-gradient-to-b from-gray-50 to-teal-600">
      <SelectLanguage />
      <SelectLanguage />
      <EnterSong />
      <Page1Nav />
    </div>
  )
}
