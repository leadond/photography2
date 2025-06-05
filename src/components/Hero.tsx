import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  buttonText?: string
  buttonLink?: string
  overlayOpacity?: number
  height?: string
  textPosition?: 'left' | 'center' | 'right'
  parallax?: boolean
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/contact',
  overlayOpacity = 0.4,
  height = 'h-screen',
  textPosition = 'center',
  parallax = false
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!parallax || !parallaxRef.current) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallax])

  const getTextPositionClass = () => {
    switch (textPosition) {
      case 'left': return 'items-center justify-start text-left pl-8 md:pl-16 lg:pl-24'
      case 'right': return 'items-center justify-end text-right pr-8 md:pr-16 lg:pr-24'
      default: return 'items-center justify-center text-center'
    }
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className={`relative z-10 flex flex-col h-full w-full px-4 ${getTextPositionClass()}`}>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to={buttonLink}
              className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Hero
