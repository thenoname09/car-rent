import CarCard from '@/components/CarCard';
import { CarsData } from '@/lib/data';
import React from 'react';

const ExploreCarsPage = async () => {
    
    const exploreCars = await CarsData()

    return (
        <div  className='py-16 px-4 max-w-7xl mx-auto space-y-8'>

            <div className='container mt-5 mx-auto text-2xl'>ExploreCars</div>
           


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>

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