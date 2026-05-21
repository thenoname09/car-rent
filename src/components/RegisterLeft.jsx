import React from 'react';

const RegisterLeft = () => {
    return (
         <div className={`relative bg-[url('https://images.pexels.com/photos/25617297/pexels-photo-25617297.jpeg')] h-full overflow-hidden  w-full bg-cover bg-no-repeat flex items-center object-cover bg-center `}>
      <div className="absolute inset-0 bg-black/15" />

  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
    
    <h1 className="text-7xl font-black italic tracking-tight">
      Create your <br />
      <span>DriveFleet</span> <br />
      account
    </h1>

    <p className="pt-5 text-[16px] leading-relaxed max-w-xs text-[#DDE6ED]">
      Manage rentals, book available cars, and view history in your dashboard.
    </p>

  </div>
        </div>
    );
};

export default RegisterLeft;