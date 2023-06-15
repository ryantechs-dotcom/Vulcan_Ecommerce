import React from 'react'
import Navbar from './components/Navbar'
import Team from './homecomp/Team'
import News from './homecomp/NewsContext'

function Home() {
  return (
    
    <div>
      <Navbar/>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1638886716328-cd97bac0eec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80)] bg-cover h-[20%] bg-center bg-no-repeat">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center "
  >
    <div className="mx-auto max-w-3xl text-center ">
      <h1
        className="bg-gradient-to-r from-white to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Vulcan.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tene
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-[#546e7a] bg-[#546e7a] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-[#546e7a] px-12 py-3 text-sm font-medium text-white hover:bg-[#546e7a] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    <div className='bg-[#EEEEEE]'>
      <Team/>
      <News/>
    </div>
    </div>
  )
}

export default Home