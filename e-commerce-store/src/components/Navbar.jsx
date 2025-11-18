import react from 'react';

export default function Navbar() {
    return(
        //Search item bar
        <div className=' w-full max-w-[475px] '>
            <p className='text-description text-sm md:text-base mb-2'>
                Search Item
            </p>
            
            <input className=' form sm:w-[400px] w-full text-sm md:text-base text-rgba(26, 31, 22, 0.5) bg-white ' 
            type='text' 
            placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
        </div>
    );
}