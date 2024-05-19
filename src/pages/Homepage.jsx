import React from 'react';
import { IMAGES } from '../constants/images';
import Navbar from '../components/Navbar';
// import envelopeIcon from '../assets/email.svg';
// import covering from '../assets/mainimg.png';
// import servicesimg from '../assets/servicesimg.png';
// import keyres from '../assets/keyres.png';
// import citsug from '../assets/citsug.png';
// import webana from '../assets/webana.png';
// import directing from '../assets/directoring.png';
// import analysing from '../assets/analysing.png';
// import attorneyimg from '../assets/attorneyimg.png';
// import getstarted from '../assets/getstarted.png';
// import group1 from '../assets/group1.svg';
// import group2 from '../assets/group2.svg';
// import group3 from '../assets/group3.svg';
// import group4 from '../assets/group4.svg';
// import group5 from '../assets/group5.svg';
// import group6 from '../assets/group6.svg';
// import arrowright from '../assets/arrowright.svg';
// import hat from '../assets/hat.svg';
// import shield from '../assets/shield.svg';
// import apps from '../assets/apps.svg';
// import facebook from '../assets/facebook.svg';
// import twitter from '../assets/twitter.svg';
// import instagram from '../assets/instagram.svg';

const Home = () => {
  return (
    <div className="container mx-auto text-sans flex flex-col items-center">
      <Navbar />
      <div className="container max-w-screen-lg flex h-max mt-8">
        <div className="container flex-1 flex-col mt-6">
          <div className="container flex">
            <p className="text-6xl leading-tight font-bold">Navigating the Business SEO Automation Tool</p>
          </div>
          <div className="container flex-col">
            <p className="text-lg text-customgrey mt-4 mb-4">Unleash the Power of Precision: Elevate Your SEO<br />Game with BSAT</p>
            <div className="relative flex items-center pl-6">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src={IMAGES} alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-12 font-medium rounded-sm py-4 px-5 w-80 placeholder-gray-500"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 5px 15px',
                  border: '1px solid white',
                }}
                placeholder="Your email address"
              />
              <button
                style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                className="font-medium text-white bg-custom py-4 w-40 rounded-sm ml-2 transform-all duration-200 hover-opacity-40"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <img src={IMAGES} alt="COVER IMG" className="mt-4 h-full w-full object-cover ml-14" />
      </div>

      <div className="container flex-1 flex-col mt-8">
        <p className="text-4xl font-bold">Full Services to Grow Your Business</p>
        <p className="text-base font-medium text-customgrey mt-6 pl-4">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
      </div>

      <div className="container mx-auto flex flex-wrap flex-row items-start max-w-screen-md h-max mt-8">
        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">KEYWORD RESEARCH</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>

        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">UNIQUE CONTENT</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>

        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">CITATIONS SUGGESTIONS</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>

        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">AUDIT REPORT</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>

        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">WEBSITE ANALYTICS</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>

        <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
          <img src={IMAGES} alt="Your Alt Text" className="w-16 h-16" />
          <p className="text-md font-bold group-hover:text-white">PAYMENT MANAGEMENT</p>
          <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
          <div className="container flex w-full items-center justify-between">
            <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
            <img src={IMAGES} alt="Your Alt Text" className="w-3 h-3 mr-16 rounded-full group-hover:text-white" />
          </div>
        </div>
      </div>

      <div className="container flex flex-row max-w-6xl h-max mt-16 p-4">
        <div className="container flex-1 rounded-lg shadow-custom1">
          <img src={IMAGES} alt="COVER IMG" className="w-full object-cover" />
        </div>
        <div className="container flex flex-col pl-12 py-0 justify-between">
          <div className="container flex items-center justify-start pt-0">
            <p className="text-md font-bold text-custom">OUR SERVICES</p>
          </div>
          <div className="container h-20">
            <p className="text-4xl font-bold drop-shadow-lg">Our Services Can Help You Grow Your Business</p>
            <p className="text-customgrey font-bold text-lg drop-shadow-lg">Embark on a Journey to Unlock a World of Ranking Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>
          </div>
          <div className="container flex-wrap">
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Keyword Research</p>
            </div>
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Citation Suggestions</p>
            </div>
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Website Audit</p>
            </div>
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Website Analytics</p>
            </div>
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Shield</p>
            </div>
            <div className="container flex items-center w-1/2 h-max py-4">
              <img src={IMAGES} alt="COVER IMG" className="w-1/2 h-max py-4" />
              <p className="text-lg font-bold pl-4 drop-shadow-md">Apps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-center bg-customlightblue p-1 w-36 rounded shadow-custom1 mt-16">
        <p className="text-md font-bold text-custom">TESTIMONIALS</p>
      </div>

      <div className="container flex flex-row items-center justify-between w-full mt-8">
        <div className="container flex-1 rounded-lg shadow-custom1">
          <img src={IMAGES} alt="COVER IMG" className="w-full object-cover" />
        </div>
        <div className="container flex flex-col pl-12">
          <div className="container">
            <p className="text-4xl font-bold">Our Customers Say</p>
            <p className="text-customgrey font-bold text-lg">Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
          </div>
          <div className="container flex flex-col mt-8">
            <div className="container flex flex-col items-center border-gray-500 rounded-lg bg-gray-300 overflow-hidden p-8 mb-8">
              <p className="text-md font-bold text-gray-400">Grace Turner</p>
              <p className="text-sm text-customgrey leading-6">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.</p>
            </div>
            <div className="container flex flex-col items-center border-gray-500 rounded-lg bg-gray-300 overflow-hidden p-8 mb-8">
              <p className="text-md font-bold text-gray-400">Linda Carter</p>
              <p className="text-sm text-customgrey leading-6">Financial planning and investment advice I received from this team completely transformed my future. I couldn’t be happier with the results.</p>
            </div>
            <div className="container flex flex-col items-center border-gray-500 rounded-lg bg-gray-300 overflow-hidden p-8">
              <p className="text-md font-bold text-gray-400">Alex Walker</p>
              <p className="text-sm text-customgrey leading-6">Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing my family’s future is secure.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-lg mt-24">
        <div className="container w-1/2">
          <p className="text-2xl font-bold">Your Team Provides Valuable Services at Any Time in Any Situation</p>
        </div>
        <div className="container flex items-center justify-between mt-16">
          <div className="container flex items-center justify-center w-80 h-72 bg-customblue rounded-full">
            <img src={IMAGES} alt="IMG here" />
            <p className="text-xl font-bold pl-4">Expert Guidance</p>
            <p className="text-sm font-medium text-customgrey pl-4">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.</p>
            <button className="font-medium text-custom pl-4">Read more</button>
          </div>
          <div className="container flex items-center justify-center w-80 h-72 bg-customgreen rounded-full">
            <img src={IMAGES} alt="IMG here" />
            <p className="text-xl font-bold pl-4">Risk Management</p>
            <p className="text-sm font-medium text-customgrey pl-4">Our experts handle and proactively mitigate financial risks, ensuring the safeguard of assets and overall stability.</p>
            <button className="font-medium text-custom pl-4">Read more</button>
          </div>
          <div className="container flex items-center justify-center w-80 h-72 bg-customgreen rounded-full">
            <img src={IMAGES} alt="IMG here" />
            <p className="text-xl font-bold pl-4">Customized Solutions</p>
            <p className="text-sm font-medium text-customgrey pl-4">Receive and benefit from financial solutions that tailored to your unique financial challenges and aspirations.</p>
            <button className="font-medium text-custom pl-4">Read more</button>
          </div>
        </div>
      </div>

      <div className="container flex items-center h-max justify-between max-w-screen-lg bg-custom mt-32 px-14 py-14 rounded-md">
        <div className="container flex flex-col items-center pl-16">
          <p className="text-4xl font-bold text-white">Get Start For Free No Credit Card Required</p>
          <div className="relative flex items-center pl-6 mt-4 justify-start pt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={IMAGES} alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="pl-12 font-semibold rounded-sm py-4 px-5 w-80 placeholder-gray-500"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.19) 0px 5px 15px',
                border: '1px solid white',
              }}
              placeholder="Email address"
            />
            <button
              style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
              className="font-medium text-white bg-customlightgr py-4 w-40 rounded-sm ml-2 transform-all duration-200 hover-opacity-40"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="container flex items-center justify-center w-1/2">
          <img src={IMAGES} alt="IMG here" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="container flex justify-between mx-auto max-w-screen-xl h-max bg-custom mt-32 px-20 pt-20 pb-16 rounded-md">
        <div className="container flex flex-col items-center justify-center h-64 p-8 w-2/5">
          <p className="text-xl font-bold text-white">Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter future.</p>
          <div className="container flex items-center justify-center cursor-pointer mt-8">
            <img src={IMAGES} alt="IMG here" className="h-4 w-4" />
            <p className="text-sm text-white ml-2">Facebook</p>
          </div>
          <div className="container flex items-center justify-center cursor-pointer mt-8">
            <img src={IMAGES} alt="IMG here" className="h-4 w-4" />
            <p className="text-sm text-white ml-2">Twitter</p>
          </div>
          <div className="container flex items-center justify-center cursor-pointer mt-8">
            <img src={IMAGES} alt="IMG here" className="h-4 w-4" />
            <p className="text-sm text-white ml-2">Instagram</p>
          </div>
        </div>

        <div className="container flex flex-col justify-between w-1/5 ml-12">
          <p className="text-lg font-bold text-white">Services</p>
          <div className="container flex flex-col justify-between">
            <p className="text-md font-medium text-gray-200 cursor-pointer">Keyword Research</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Website Audit</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Citation Suggestions</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Website Analytics</p>
          </div>
        </div>

        <div className="container flex flex-col justify-between w-1/5 ml-12">
          <p className="text-lg font-bold text-white">Explore More</p>
          <div className="container flex flex-col justify-between">
            <p className="text-md font-medium text-gray-200 cursor-pointer">About Us</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Blog</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Site Map</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">Privacy</p>
          </div>
        </div>

        <div className="container flex flex-col justify-between w-1/5 ml-12">
          <p className="text-lg font-bold text-white">Contact Details</p>
          <div className="container flex flex-col justify-between">
            <p className="text-md font-medium text-gray-200 cursor-pointer">contact@briofin.com</p>
            <p className="text-md font-medium text-gray-200 cursor-pointer">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-lg text-center mt-12">
        <p className="text-gray-200 mt-4">©DSCODE 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Home;
