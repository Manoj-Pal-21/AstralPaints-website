import React from 'react'
import Carousel from '../../component/Carousel/Carousel'
import About from '../../component/About/About'
import Category from '../../component/Category/Category'
import Services from '../../component/Services/Services'
import Journey from '../../component/Journey/Journey'
import Blog from '../../component/Blog/Blog'
import Colours from '../../component/Colours/Colours'

const Home = () => {
  return (
    <div>
      <Carousel />
      <About/>
      <Category />
      <Services />
      <Colours />
      <Journey />
      <Blog />
    </div>
  )
}

export default Home
