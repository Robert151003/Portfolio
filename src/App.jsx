import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Hero Section with Navbar */}
        <div style={{ backgroundImage: 'var(--bg-hero-pattern)' }} className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* Centered Content Sections */}
        <div className='flex flex-col items-center justify-center w-full'>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />``
          <div className='relative z-0 w-full'>
            <Contact />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;