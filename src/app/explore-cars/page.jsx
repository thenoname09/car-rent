import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async () => {
    const res = await fetch("http://localhost:4000/cars_info")
    const exploreCars = await res.json()

    return (
        <div  className=' bg-[#DDE6ED] space-y-8'>

            <div className='container mt-5 mx-auto text-2xl'>ExploreCars</div>
           


            <div className='grid grid-cols-3 gap-5 container  mx-auto'>

                {
                    exploreCars.map((exploreCar) =><CarCard 
                    key={exploreCar._id}
                    exploreCar={exploreCar}
                    >

                    </CarCard> )
                }
            </div>











        </div>
        
    );
};

export default ExploreCarsPage
;