import React from 'react';
import bgImg from '../../../assets/home/Picture.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>EXPLORE OUR NEW APP</h3>
                        <h1 className='md:text-3xl text-2x1 font-bold '>Bridging local designers ad users for personalized one-of-a-kind creations</h1>
                        <div className="md:w-1/2">
                            <p className=''>Sign up now and bring ypur visions to life</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Today</button>
                            <button className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>View Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;