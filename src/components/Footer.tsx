import { footer } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-500 text-gray-400 py-12 bottom-0 left-0 w-full'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4 sm:px-6 lg:px-8'>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'>
              About Us
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi iste impedit odio quae sequi
                 at error iusto. Recusandae sunt odit
                 fuga consequuntur laborum quasi porro labore ullam. Officiis, iure.</p>
        </div>
        <div>
        <h3 className='text-lg font-bold text-white mb-4'>
              links
            </h3>
            <ul>
                <li><a href="/" className='hover:text-red-500'>Home</a></li>
                <li><a href="about" className='hover:text-red-500'>About</a></li>
                <li><a href="courses" className='hover:text-red-500'>Courses</a></li>
                <li><a href="Contact" className='hover:text-red-500'>Contant</a></li>
            </ul>

    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>
              Follow us
            </h3>
            <ul>
                <li><a href="/" className='hover:text-red-500'>Home</a></li>
                <li><a href="facebook" className='hover:text-red-500'>Facebook</a></li>
                <li><a href="tiktok" className='hover:text-red-500'>tiktok</a></li>
                <li><a href="Whatsapp" className='hover:text-red-500'>Whatsapp</a></li>
            </ul>

    </div> <div>
        <h3 className='text-lg font-bold text-white mb-4'>
              Contant us
            </h3>
            <p>Gmail <a href="./muzammilshaheen77@.gmail.com">muzammilshaheen77@.gmail.com</a></p>
            <p>Phone: <span className='hover:text-white'>03033105085</span></p>
            
    </div>
     
    </div>
    <p className='flex justify-center p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem</p>
    </footer>
  )
}

export default Footer