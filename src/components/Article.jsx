import React from 'react'
import DeliverGuy from '../assets/deliveryGuy.jpg'
import Aeroplane from '../assets/aeroplane.jpg'


export const Article = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10'>
                <div style={{ fontSize: '50px' }} className="sm:text-30px"><h1>Latest Articles</h1>
  
</div>
                
        <div class='px-10  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4'>

                    <div>
                    <img src={Aeroplane} alt="truck img" className='w-full rounded-none h-40 relative'/>
                    <div className="bg-green-50 p-4 w-full">
                        <h3>Learn and Stay Up to Date With</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 bg-black-500'></hr>
                        
                    </div>
                    </div>

                    <div>
                    <img src={DeliverGuy} alt="shipping img" className='w-full rounded-none h-40 relative' />
                    <div className="bg-red-50 p-4 rounded">
                         
                        <h3>Asia-Pacific Shipping Update</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 text-black-900'></hr>
                        
                    </div>
                    </div>

                    
                    <div>
                    <img src={Aeroplane} alt="headset img" className='w-full rounded-none h-40 relative' />

                        <div className="bg-red-50 p-4 rounded">
                        <h3>Stay Up to Date With Logistics</h3>
                        <p class='py-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum, nesciunt asperiores adipisci rerum ut atque eos soluta harum, error minus.</p>
                        
                        <h4 class='text-black-100'>More Info</h4>
                        <hr class='w-20 bg-black-500'></hr>
                        
                    </div>
                    </div>

                    

        </div> 
                <button className='bg-black text-white px-10 py-3 rounded-3xl'>More Articles</button>
    </div>
  )
}

export default Article