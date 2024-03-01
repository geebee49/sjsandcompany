import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import HeroSection2 from '../HeroSection2'
import Cards from '../Cards'
import Footer from '../Footer'
import { Element } from 'react-scroll'

function Home(){
    return(
        <>
            <HeroSection></HeroSection>
            <HeroSection2></HeroSection2>
            <React.Fragment>
            <Element id='destination' name='destination'><Cards></Cards></Element>
            </React.Fragment>

            <Footer></Footer>
        </>
    )
}

export default Home