import HeroImage from '../assets/hero.png'

export default function Hero() {
  return (
      <div>
          <img src={HeroImage} alt="Hero Image" className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}
