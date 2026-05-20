import React from 'react';

const RegisterLeft = () => {
    return (
         <div className={`relative bg-[url('https://images.pexels.com/photos/25617297/pexels-photo-25617297.jpeg')] h-screen overflow-hidden  w-full bg-cover bg-no-repeat flex items-center object-cover bg-center `}>
        <div className="absolute inset-0  bg-black/15" />
          <div className=" p-4   text-white">
            <h1
              className="text-white text-7xl font-black italic tracking-tight text-center"
            >
              Create your <br /> <span className=''>DriveFleet</span>  <br /> account
            </h1>
            <p className="text-2xl text-center pt-5">Manage rentals,book available cars, and view history in your dashboard.</p>
          </div>
        </div>
    );
};

export default RegisterLeft;