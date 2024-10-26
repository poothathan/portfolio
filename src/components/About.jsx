import React from 'react'
import AboutImg from '../assets/AboutImg.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              About Me
            </h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImg} alt='' className='w-72 h-80 rounded object-cover mb-8 md-0'/>
                <div className='flex-1'>
                  <p className='text-lg mb-8'>
                    In this tutorial, I'll show you step-by-step how to build a stunning personal portfolio website using React, Vite,
                    and Tailwind CSS. Whether you're a beginner or an experienced developer, you'll find valuable insights and tips 
                    to enhance your web development skills.
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-center'>
                      <label htmlFor='htmlandcss' className='w-2/12'>
                        HTML & CSS 
                      </label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <label htmlFor='htmlandcss' className='w-2/12'>
                        Kotlin 
                      </label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <label htmlFor='htmlandcss' className='w-2/12'>
                        Python 
                      </label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 flex justify-between text-center'>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        3+
                      </h3>
                      <p> Years Experience</p>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        50+
                      </h3>
                      <p> Projects Completed </p>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        10+
                      </h3>
                      <p>Happy Clients</p>
                    </div>


                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About