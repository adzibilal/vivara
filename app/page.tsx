import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import HomeProduct from '@/components/HomeProduct'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <div className='container'>
                <Cta />

                <HomeProduct />
            </div>
        </div>
    )
}
