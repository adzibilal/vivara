import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='container'>
                <div className='flex justify-between items-center w-full py-4'>
                    <Image
                        src={'/logo-light.png'}
                        width={100}
                        alt='logo'
                        height={15}
                    />
                    <div className="flex text-white gap-4">
                      <div className="link-footer cursor-pointer">Instagram</div>
                      <div className="link-footer cursor-pointer">Tiktok</div>
                      <div className="link-footer cursor-pointer">Shoppe</div>
                      <div className="link-footer cursor-pointer">Tokopedia</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
