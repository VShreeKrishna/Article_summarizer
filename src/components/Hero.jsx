import React from 'react';
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full wb-10 pt-3'>
    <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
    <button
          type='button'
          onClick={() =>
            window.open("https://github.com/VShreeKrishna", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
    </nav>
    <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Sumz</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summz, an article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero