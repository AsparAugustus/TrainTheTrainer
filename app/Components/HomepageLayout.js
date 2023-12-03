import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Footer from './Footer'

const HomepageLayout = () => {
  return (
    <div className="w-full h-full">
     <Header />
     <Hero />
      <Hero3 />
      <Hero2 />
      <Footer />
    </div>
  )
}

export default HomepageLayout