import { motion } from 'framer-motion'

import {styles} from '../styles'

import { ComputersCanvas } from './canvas'
import { Link } from 'react-router-dom'


const Hero = () => {

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative w-full h-screen mx-auto'> 
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 mx-2 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Robert</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a software developer. I develop <br className='sm:block hidden'/>Artificial Intelligence and Web Applications.</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='relative xs:bottom-10 bottom-32 w-full flex justify-center items-center xs:mt-0 mt-12 z-1 flex-col'>
        <p className='text-secondary'>Click me!</p>
        <Link  to={`#about`} onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div animate={{y:[0, 24, 0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero