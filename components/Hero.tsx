import Image from "next/image"


const Hero = () => {
  return (
    <div className="hero w-full lg:h-screen h-[50vh]">
        <Image src='/bg-hero.png' fill alt="hero"/>
    </div>
  )
}

export default Hero