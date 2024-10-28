'use client'
import React from 'react'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import FeaturedWebinars from '@/components/FeaturedWebinars'


const page = () => {
  return (
    <main className='bg-black'>
<Navbar/>   
<Herosection/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWebinars/>

</main>
    
  )
}

export default page