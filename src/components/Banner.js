import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from '../assets/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return ( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}  
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            BEN <span>AIDEN</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='MB-6 text-[36PX] lg:text-[60px]
              font-semibold uppercase leading-[1]'  
          >
            <span className='text-whit mr-4'>I am a</span>
            <TypeAnimation 
              sequence={[
                'Developer', 2000,
                'Designer', 2000,
                'Youtuber', 2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            className='mp-8 max-w-lg mx-auto lg:mx-0'
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
          >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero iusto optio sunt, 
              eaque id neque quasi similique. Harum totam molestiae animi at aperiam? Aspernatur nobis iusto sapiente.
          </motion.p>
          <motion.div 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
          >
            <button className='btn btn-lg'>Contact ma</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          <motion.div 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            variants={fadeIn('up', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
          >
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
        <motion.div 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
          >
            <img src={Image} alt="Personal_Image" />
          </motion.div>
      </div>
    </div>
  </section> 
)
};

export default Banner;
