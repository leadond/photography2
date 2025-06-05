import React from 'react'

interface LogoWatermarkProps {
  variant?: 'light' | 'dark'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  opacity?: number
  size?: 'sm' | 'md' | 'lg'
}

const LogoWatermark: React.FC<LogoWatermarkProps> = ({
  variant = 'light',
  position = 'bottom-right',
  opacity = 0.2,
  size = 'md'
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4'
      case 'top-right': return 'top-4 right-4'
      case 'bottom-left': return 'bottom-4 left-4'
      case 'bottom-right': return 'bottom-4 right-4'
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      default: return 'bottom-4 right-4'
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-16 h-16'
      case 'md': return 'w-24 h-24'
      case 'lg': return 'w-32 h-32'
      default: return 'w-24 h-24'
    }
  }

  const logoSrc = variant === 'light' 
    ? '/assets/logo/d-white.png' 
    : '/assets/logo/d-gold.png'

  return (
    <div 
      className={`absolute ${getPositionClass()} ${getSizeClass()} pointer-events-none z-10`}
      style={{ opacity }}
    >
      <img 
        src={logoSrc} 
        alt="DXM Productions" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default LogoWatermark
