'use client'
import { SelectLanguage, EnterSong, Page1Nav } from '@/components'

// `app/choose/page.tsx` is the UI for the `/choose` URL
export default function Page() {
  return (
    <div className="h-screen grid place-item-center bg-gradient-to-b from-gray-50 to-teal-600">
      <div className='inline-flex w-5/6 justify-center gap-x-1.5 rounded-3xl bg-teal-900 px-3 py-2 text-sm font-semibold text-teal-50 shadow-sm ring-1 ring-inset ring-gray-300'>
        <SelectLanguage />
        <SelectLanguage />
      </div>
        <EnterSong />
        <Page1Nav />

    </div>
  )
}
