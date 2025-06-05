import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface VideoShowcaseProps {
  videoUrl: string
  title?: string
  description?: string
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ 
  videoUrl, 
  title = "Our Photography Process",
  description = "Experience our professional photography process from start to finish. We focus on capturing authentic moments with artistic vision and technical excellence."
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('video-showcase')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="video-showcase" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={videoUrl}
                title="Photography Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6 text-amber-400">{title}</h2>
            <p className="text-xl mb-8 text-gray-300">{description}</p>
            
            <div className="space-y-6 mb-10">
              {[
                'Capturing authentic moments with artistic vision',
                'Professional equipment and lighting techniques',
                'Attention to detail in every shot',
                'Post-processing expertise for stunning final images'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-amber-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <Link 
              to="/gallery" 
              className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
