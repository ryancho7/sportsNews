import React from 'react'
import { logo } from '../assets';
import Cards from './cards';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            {/* <img src={logo} alt="The summarize logo" className='w-28 object-contain'/> */}
            <p></p>
            <button type='button' onClick={() => window.open("https://github.com/ryancho7")} className='black_btn'>GitHub</button>
        </nav>
        <h1 className='head_text'> 
            Keep Up With the Most Recent <br className='max-md:hidden'/>
            <span className='orange_gradient'>Sports News</span>
        </h1>
        <h2 className='desc mb-3'>
            Stay informed with the latest news, while we handle the in-depth reading for you.
        </h2>

        <section className='flex items-center'>
            <Cards />
        </section>
    </header>
  )
}

export default Hero