import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div>
            <h2>Over 10,000+ jobs to apply</h2>
            <p>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
            <div>
                <div>
                    <img src={assets.search_icon} alt="" />
                    <input type="text" 
                    placeholder='Search for Jobs...'    
                    className='max-sm:text-xs p-2 rounded outline-none w-full'  />
                </div>

                <div>
                    <img src={assets.location_icon} alt="" />
                    <input type="text" 
                    placeholder='Location'    
                    className='max-sm:text-xs p-2 rounded outline-none w-full'  />
                </div>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero