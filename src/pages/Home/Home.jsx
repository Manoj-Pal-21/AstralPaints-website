import React from 'react'
import Carousel from '../../component/Carousel/Carousel'
import About from '../../component/About/About'
import Category from '../../component/Category/Category'
import Services from '../../component/Services/Services'

const Home = () => {
  return (
    <div>
      <Carousel />
      <About/>
      <Category />
      <Services />
    </div>
  )
}

export default Home
