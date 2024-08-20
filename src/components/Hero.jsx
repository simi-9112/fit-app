import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center'>
        <div className='flex flex-col gap-4 max-w-[800px] w-full mx-auto p-4'>
        <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl mid:text-6xl lg:text-7xl'>SWOLE<span className='text-blue-400'>NORMOUS</span></h1>
        </div>
      <p className='text-small mid:text-base font-light'>I hereby acknowledgement that i may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becomin the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors</p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text ={"Accept & Begin"}/>
    </div>
  )
}
