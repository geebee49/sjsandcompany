import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import HeroSection2 from '../HeroSection2'
import Cards from '../Cards'
import Footer from '../Footer'

function Home(){
    return(
        <>
            <HeroSection></HeroSection>
            <HeroSection2></HeroSection2>
            <Cards></Cards>
            <Footer></Footer>
        </>
    )
}

export default Home