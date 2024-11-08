import React from 'react'

import truck from '../assets/truck.png';
import shipping from '../assets/shipping.png';
import headset from '../assets/headset.png';
import tag from '../assets/tag.png';

export const OurService = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 '>
                <div style={{ fontSize: '50px' }} className="sm:text-30px"><h1>Our Services</h1>
  
</div>
                
        <div class='px-10  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4'>

                    <div className="bg-green-50 p-4 rounded">
                          <img src={truck} alt="truck img" />
                        <h3>Fast Transportation</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 bg-black-500'></hr>
                        
                    </div>

                    <div className="bg-red-50 p-4 rounded">
                         <img src={shipping} alt="shipping img" />
                        <h3>Ocean Freight</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 text-black-900'></hr>
                        
                    </div>

                    <div className="bg-red-50 p-4 rounded">
                         <img src={headset} alt="headset img" />
                        <h3>Custons Services</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 bg-black-500'></hr>
                        
                    </div>

                    <div className="bg-red-50 p-4 rounded">
                       <img src={tag} alt="tag img" />
                        <h3>Monthly Fixed Rate</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 bg-black-900'></hr>
                        
                    </div>

        </div> 
                <button className='bg-black text-white px-10 py-3 rounded-3xl'>Explore Services</button>
    </div>
  )
}
