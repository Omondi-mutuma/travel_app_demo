import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 xl:flex-row'>
      {/* Right hero landscape image */}
      <div className="hero-map" />

      {/* Placing and position icon on top of heading */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'        
        />  
        {/* Hero text content */}
        <h1 className='bold-52 lg:bold-88'>Masai Mara Camp Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          We want to be on each of your journeys seeking the satisfaction of seeing the incrruptible beauty of nature, We can help you on an adventure round the world in just one app
        </p>  

        {/*Filling in rate stars and reviews*/}
        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            208k
            <span className='regular-16 ml-1 hover:text-blue-70 '>Excellent reviews</span>
          </p>
        </div>

        {/* Hero Buttons */}
        <div className='flex w-full gap-3 sm:flex-row'>
          <Button 
            type="button" 
            title='Download App'
            variant='btn_green'
            />

            <Button 
            type="button" 
            title='How we work?'
            icon="/play.svg"
            variant='btn_white_text'
            />
        </div>
      </div>

    {/* Floating interative info box */}
    <div className='relative flex flex-1 items-start'>
      <div className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
      <div className='flex flex-col'>
        <div className='flexBetween'>
          <p className='regular-16 text-gray-20'>Location</p>
          <Image 
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
          />
        </div>

        <p className='bold-20 text-white'>Narok County</p>

        <div className='flexBetween mt-5'>
          <div className='flex flex-col'>
            <p className='regular-16 block text-gray-20'>Distances</p>
            <p className='bold-20 text-white'>173.95 mi</p>
          </div>

          <div className='flex flex-col'>
            <p className='regular-16 block text-gray-20'>Elevation</p>
            <p className='bold-20 text-white'>12.040 km</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Hero