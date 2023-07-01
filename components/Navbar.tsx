"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div className={`bg-nav ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <nav className='navbar '>
                <div className='flex items-center h-14'>
                    <Image
                        src={`${isScrolled ? '/logo-dark.png' : '/logo-light.png'}`}
                        width={100}
                        alt='logo'
                        height={15}
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <div className='ic-navbar text-sm'>
                        <FontAwesomeIcon icon={faSearch} width={18} />
                    </div>
                    <Link href={''}>Shop</Link>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Collab</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
