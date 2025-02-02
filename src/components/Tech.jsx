import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { useState, useEffect } from 'react';

const Tech = () => {
  // Set a state for the device width
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Consider 768px as the breakpoint for small devices
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Call once to set the initial state
    handleResize();

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-[1100px]'>
      {technologies.slice(0, technologies.length).map((tech, index) => (
        <div className='w-28 h-28' key={tech.name}>
          {!isSmallScreen ? (
            <BallCanvas icon={tech.icon} />
          ) : (
            <img src={tech.icon} alt={tech.name} className='w-full h-full object-cover' />
          )}
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "");
