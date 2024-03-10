import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/house-7313645_1280.jpg';
import cryptoImg from '../assets/bitcoin-2057405_1280.webp';
import netflixImg from '../assets/netflix-6964935_640.jpg';
import twitchImg from '../assets/twitch-overlay-7559883_640.jpg';

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore et cum iste fugit doloribus, libero nihil maiores molestias veritatis, iusto dolorum? Magni tenetur voluptatibus odio repellendus velit ipsum saepe.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={cryptoImg} title='Crypto App' />
          <ProjectItem img={propertyImg} title='Property App' />
          <ProjectItem img={netflixImg} title='Netflix App' />
          <ProjectItem img={twitchImg} title='Twitch App' />
        </div>
    </div>
  )
}

export default Projects