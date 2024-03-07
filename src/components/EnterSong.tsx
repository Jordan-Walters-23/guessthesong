import React from 'react'

function EnterSong() {
  return (
    <>
      <h2><b>Add your songs...</b></h2>
      <div className='grid place-item-center w-5/6 p-5 rounded-3xl bg-teal-600'>
        <input className='bg-teal-600' name="myInput" defaultValue="Artist..." />
        <input className='bg-teal-600' name="myInput" defaultValue="Song..." />
        <input className='bg-teal-600' name="myInput" defaultValue="Lyrics.." />
      </div>
    </>
  )
}

export default EnterSong