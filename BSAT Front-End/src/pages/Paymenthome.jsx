import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { IMAGES } from '../constants/images';

const Paymenthome = () => {
    const navigate = useNavigate(); // Create a navigate object

    // Function to handle the navigation to the signup page
    const handlePlanSelect = () => {
        localStorage.setItem("paymentplan", true);
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="container mx-auto text-sans flex flex-col items-center">
            <Navbar />
            <div className="container max-w-screen-lg flex h-max mt-8">
                <div className="container flex flex-1 flex-col mt-6">
                    <div className="container flex">
                        <p className="text-6xl leading-tight font-bold">Navigating the Business SEO Automation Tool</p>
                    </div>
                    <div className="container flex flex-col">
                        <p className="text-lg text-customgrey mt-4 mb-24">Unleash the Power of Precision: Elevate Your SEO <br /> Game with BSAT</p>
                    </div>
                </div>
                <div className="container flex-1">
                    <img src={IMAGES.coverimg} alt="COVER IMG" className="-mt-4 h-full w-full object-cover ml-14" />
                </div>
            </div>

            <div id="section1">
                <p className="text-4xl font-bold">The Right Plan For Your Business </p>
            </div>

            <div className="container max-w-screen-md mt-10 mb-6 pl-4">
                <p className="text-base font-medium text-customgrey">We have several powerful plans to showcase your business and get discovered as creative entrepreneurs. Everything you need.</p>
            </div>

            <div className="container mx-auto flex flex-wrap flex-row items-start max-screen-md h-max justify-center">
                {/* Plan 1 - Intro */}
                <div
                    className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105"
                    onClick={handlePlanSelect} // Attach the onClick handler
                >
                    <p className="text-xl font-bold group-hover:text-white">Intro</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Keyword Research</li>
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Audit Report</li>
                        <li className="font-bold text-gray-400 mb-2">✗ Article Writing</li>
                        <li className="font-bold text-gray-400 mb-2">✗ Ads Generation</li>
                        <li className="font-bold text-md text-gray-400 mb-2">✗ Competitors Analysis</li>
                    </p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-md font-bold text-black group-hover:text-white">$0/month</p>
                        <img
                            src={IMAGES.arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                {/* Plan 2 - Base */}
                <div
                    className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105"
                    onClick={handlePlanSelect} // Attach the onClick handler
                >
                    <p className="text-xl font-bold group-hover:text-white">Base</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Keyword Research</li>
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Audit Report</li>
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Article Writing</li>
                        <li className="font-bold text-gray-400 mb-2">✗ Ads Generation</li>
                        <li className="font-bold text-md text-gray-400 mb-2">✗ Competitors Analysis</li>
                    </p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-md font-bold text-black group-hover:text-white">$50/month</p>
                        <img
                            src={IMAGES.arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                {/* Plan 3 - Pro */}
                <div
                    className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105"
                    onClick={handlePlanSelect} // Attach the onClick handler
                >
                    <p className="text-xl font-bold group-hover:text-white">Pro</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Premium Keyword Research</li>
                        <li className="font-bold mb-2">✓ Audit Report</li>
                        <li className="font-bold mb-2">✓ Article Writing</li>
                        <li className="font-bold mb-2">✓ Ads Generation</li>
                        <li className="font-bold  text-md text-gray-400 mb-2">✗ Competitor Analysis</li>
                    </p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-md font-bold text-black group-hover:text-white">$80/month</p>
                        <img
                            src={IMAGES.arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                {/* Plan 4 - Enterprise */}
                <div
                    className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105"
                    onClick={handlePlanSelect} // Attach the onClick handler
                >
                    <p className="text-xl font-bold group-hover:text-white">Enterprise</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">
                        <li className="text-md font-bold leading-5 text-customgrey group-hover:text-white mb-2">✓ Premium Keyword Research</li>
                        <li className="font-bold  mb-2">✓ Audit Report</li>
                        <li className="font-bold  mb-2">✓ Article Writing</li>
                        <li className="font-bold  mb-2">✓ Ads Generation</li>
                        <li className="font-bold  mb-2">✓ Competitor Analysis</li>
                    </p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-md font-bold text-black group-hover:text-white">$120/month</p>
                        <img
                            src={IMAGES.arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>
            </div>

            {/* Service Section */}
            <div id="section3" className="container flex flex-row max-w-6xl h-max mt-16 p-4">
                <div className="container">
                    <div className="container bg-customlightblue rounded-sm rounded-tl-[30px] rounded-br-[30px] h-max shadow-custom1">
                        <img src={IMAGES.servicesimg} alt="COVER IMG" className="h-full w-full object-cover" />
                    </div>
                </div>

                <div className="container flex flex-col pl-12 py-0 justify-between ">
                    <div className="container flex flex-row items-center justify-start pt-0">
                        <div className="container bg-customlightblue p-1 w-32 rounded shadow-custom1">
                            <p className="text-md font-bold text-custom">OUR SERVICES</p>
                        </div>
                        <div className="container h-0.5 ml-4 w-20 bg-theme rounded shadow-custom1"></div>
                    </div>

                    <div className="container mb-20">
                        <p className="text-4xl font-bold drop-shadow-lg">Our Services Can Help You Grow Your Business </p>
                    </div>

                    <div className="container">
                        <p className="text text-customgrey font-bold drop-shadow-lg">Embark on a Journey to Unlock a World of ranking Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>
                    </div>

                    <div className="container flex flex-wrap ">
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={IMAGES.keyres} alt="COVER IMG" className="h-8 w-8 shadow-md" />
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Keyword Research</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={IMAGES.citsug} alt="COVER IMG" className="h-8 w-8 shadow-md" />
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Citation Suggestions</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={IMAGES.webaud} alt="COVER IMG" className="h-8 w-8 shadow-md" />
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Website Audit</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={IMAGES.webana} alt="COVER IMG" className="h-8 w-8 shadow-md" />
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Website Analytics</p>
                        </div>
                    </div>
                    <button style={{ boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }} className="font-medium text-black transform-all  duration-200 hover:bg-custom hover:text-white py-4 w-40 rounded-sm ml-2">Explore Services</button>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="container max-w-screen-lg mt-16 p-1 h-max">
                <div className="container flex items-center">
                    <div className="container flex items-center justify-center bg-customlightblue p-1 w-36 rounded shadow-custom1">
                        <p className="text-md font-bold text-custom">TESTIMONIALS</p>
                    </div>
                    <div className="container h-0.5 ml-4 w-20 bg-theme rounded shadow-custom1"></div>
                </div>

                <div className="container flex flex-col w-1/2 h-44 mt-4 justify-around">
                    <p className="text-4xl font-bold">What Our Customers Say</p>
                    <p className="text text-customgrey font-semibold">Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
                </div>

                <div className="container flex items-center justify-between mt-16">
                    <div className="container flex w-80 h-72 flex-col justify-between border-[3px] border-grey-500 rounded-tl-[30px] rounded-br-[30px] p-8">
                        <div className="container flex h-12">
                            <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                <img src={IMAGES.directorimg} alt="COVER IMG" className="h-12 w-16" />
                            </div>
                            <div className="container flex flex-col justifyaround px-6">
                                <p className="text font-bold">Grace Turner</p>
                                <p className="text-md font-medium text-gray-400">Director</p>
                            </div>
                        </div>
                        <p className="text-sm text-customgrey leading-6 font-medium mt-8">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community</p>
                        <div className="contianer flex flex-row-reverse items-center">
                            <p className="text-7xl font-chonburi mt-4 text-custom">“</p>
                        </div>
                    </div>

                    <div className="container flex w-80 h-72 flex-col justify-between rounded-tl-[30px] rounded-br-[30px] p-8 bg-gradient-tt">
                        <div className="container flex h-12">
                            <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                <img src={IMAGES.analystimg} alt="COVER IMG" className="h-12 w-16" />
                            </div>
                            <div className="container flex flex-col justifyaround px-6">
                                <p className="text font-semibold text-white">Linda Carter</p>
                                <p className="text-md font-medium text-gray-200">Analyst</p>
                            </div>
                        </div>
                        <p className="text-sm text-white leading-6 mt-8">Financial planning and investment advice I received from this team completely transformed my future. I couldnt be happier with the results.</p>
                        <div className="contianer flex flex-row-reverse items-center">
                            <p className="text-7xl font-chonburi mt-4 text-white">“</p>
                        </div>
                    </div>

                    <div className="container flex w-80 h-72 flex-col justify-between border-[3px] border-grey-500 rounded-tl-[30px] rounded-br-[30px] p-8">
                        <div className="container flex h-12">
                            <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                <img src={IMAGES.attorneyimg} alt="COVER IMG" className="h-12 w-16" />
                            </div>
                            <div className="container flex flex-col justifyaround px-6">
                                <p className="text font-bold">Alex Walker</p>
                                <p className="text-md font-medium text-gray-400">Attorney</p>
                            </div>
                        </div>
                        <p className="text-sm text-customgrey leading-6 font-medium mt-8">Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing familys future is secure</p>
                        <div className="contianer flex flex-row-reverse items-center">
                            <p className="text-7xl font-chonburi mt-4 text-custom">“</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div id="section2" className="container  max-w-screen-xl h-max bg-custom mt-32 px-32 pt-20 pb-16">
                <div className="container flex justify-between">
                    <div className="container flex flex-col justify-between h-64 pr-8 w-2/5">
                        <p className="text-xl font-bold text-white">BSAT</p>
                        <p className="text-md font-medium text-gray-200 leading-7 mb-4">Our expert financial consultants provide solutions to help you achieve financial <br/> wealth. Trust us to guide you toward a <br/>  brighter financial future.</p>
                        <div className="container flex items-center justify-between mb-8">
                            <div className="container flex items-center cursor-pointer">
                                <img src={IMAGES.facebook} alt="IMG here" className="h-4 w-4"/>
                                <p className="text-sm text-white ml-2">Facebook</p> 
                            </div>
                            <div className="container flex items-center cursor-pointer">
                                <img src={IMAGES.twitter} alt="IMG here" className="h-4 w-4"/>
                                <p className="text-sm text-white ml-2">Twitter</p>
                            </div>
                            <div className="container flex items-center cursor-pointer">
                                <img src={IMAGES.instagram} alt="IMG here" className="h-4 w-4"/>
                                <p className="text-sm  text-white ml-2">Instagram</p>
                            </div>
                        </div>
                    </div>

                    <div className="container flex flex-col justify-between w-1/5 ml-12">
                        <p className="text-lg font-bold text-white">Our Services</p>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Keyword Research</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Website Audit</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Citation Suggestions</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Website Analytics</p></a>
                    </div>

                    <div className="container flex flex-col justify-between w-1/5 ml-12">
                        <p className="text-lg font-bold text-white">Explore More</p>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">About Us</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Blog</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Site Map</p></a>
                        <a><p className="text-md font-medium text-gray-200 cursor-pointer">Privacy</p></a>
                    </div>

                    <div className="container flex flex-col w-1/5 ml-12">
                        <p className="text-lg font-bold text-white">Contact Details</p>
                        <a><p className="text-md font-medium text-gray-200 mt-8 cursor-pointer">contact@briofin.com</p></a>
                        <a><p className="text-md font-medium text-gray-200 mt-8 cursor-pointer">+1 (555) 123-4567</p></a>
                    </div>
                </div> 

                <div className="container max-w-screen-lg bg-gray-200 h-0.5 mt-12"></div>
                <p className="text text-gray-200 mt-4">DSCODE 2023 © All rights reserved</p>
            </div>
        </div>
    );
};

export default Paymenthome;
