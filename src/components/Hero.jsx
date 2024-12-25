import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4' >
        <div className='flex flex-col gap-4'> 
        <p>IT'S Time To Get </p>
        <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Fuck'n <span className='text-blue-400'>Ripped</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Risk it all to get ripped—<span className='text-red-400 font-medium'>where you'll push limits you didn't even know you had,</span> sweat like you're auditioning for a waterfall commercial,
            <span className='text-red-400 font-medium'> and walk away feeling like the champion of your own ridiculous fitness saga!</span></p>
        <Button func={()=>{
            window.location.href='#generate'
        }} text={"Accept And Begin" }></Button>
        </div>

  )
}
