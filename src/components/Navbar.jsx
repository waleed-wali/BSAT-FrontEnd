import { Link, useNavigate } from 'react-router-dom';
const Navbar = ()=>{

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <div className="container flex flex-row mx-auto max-w-screen-lg py-4 mt-5">
            <div className="container flex flex-1 items-center">
                <p className="text-2xl font-bold">BSAT</p>
            </div>
            <div className="container flex items-center justify-between flex-1 mr-4">
                <button className="text-sm font-bold mr-4 h-full px-4 hover:bg-custom hover:text-white transform-all duration-200">Home</button>
                <button className="text-sm font-bold mr-4 h-full px-4 hover:bg-custom hover:text-white transform-all duration-200" onClick={() => scrollToSection('section3')}>Service</button>
                <button className="text-sm font-bold mr-4 h-full px-4 hover:bg-custom hover:text-white transform-all duration-200" onClick={() => scrollToSection('section1')}>Pricing</button>
                <button className="text-sm font-bold mr-4 h-full px-4 hover:bg-custom hover:text-white transform-all duration-200" onClick={() => scrollToSection('section2')}>Contact</button>
                <button className="text-sm font-bold h-full px-4 hover:bg-custom hover:text-white transform-all duration-200" onClick={() => scrollToSection('section2')}>Help</button>
            </div>

            <div className="container flex flex-row-reverse flex-1 items-center">
                <button className="font-medium text-white bg-custom transform-all duration-200 py-3 w-40 rounded-sm hover:opacity-40" ><Link to="/signup">Get Started         
          </Link></button>
                <button className="font-medium text-custom py-3 w-20 hover:underline"><Link to="/login"> Sign in
          
        </Link></button>
                
            </div>
            

        </div>
    )
}

export default Navbar;