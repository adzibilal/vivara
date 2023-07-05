import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <div className='cta w-full mt-20'>
            <Image
                src='/cta.jpg.png'
                className='w-full'
                alt=''
                width={1000}
                height={50}
            />
            <div className='desc-cta flex justify-between items-center py-5'>
                <div className='title'>
                    <p className='italic'>#Localbrand</p>
                    <p className='font-bold text-3xl'>VIVARA APPAREL</p>
                </div>
                <div className='btn-cta bg-black text-white py-3 px-10 rounded-full hover:bg-gray-900 cursor-pointer '>
                    View More
                </div>
            </div>
        </div>
    )
}

export default Cta
