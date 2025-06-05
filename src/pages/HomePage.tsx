import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import InstagramFeed from '../components/InstagramFeed'
import TestimonialSlider from '../components/TestimonialSlider'
import VideoShowcase from '../components/VideoShowcase'
import PageTransition from '../components/PageTransition'

const HomePage = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero
        title="Capturing Life's Precious Moments"
        subtitle="Professional photography services in Houston, TX"
        backgroundImage="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        buttonText="Book a Session"
        buttonLink="/contact"
        overlayOpacity={0.5}
        parallax={true}
      />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Photography Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From portraits to events, we provide a wide range of professional photography services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portrait Photography */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg" 
                alt="Portrait Photography" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Portrait Photography</h3>
                <p className="text-gray-600 mb-4">
                  Capture your personality with our professional portrait photography services.
                </p>
                <Link 
                  to="/services" 
                  className="text-amber-500 font-semibold hover:text-amber-600 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Event Photography */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Event Photography" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Event Photography</h3>
                <p className="text-gray-600 mb-4">
                  Document your special events with our professional event photography.
                </p>
                <Link 
                  to="/services" 
                  className="text-amber-500 font-semibold hover:text-amber-600 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Wedding Photography */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" 
                alt="Wedding Photography" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Wedding Photography</h3>
                <p className="text-gray-600 mb-4">
                  Preserve your wedding day memories with our professional photography.
                </p>
                <Link 
                  to="/services" 
                  className="text-amber-500 font-semibold hover:text-amber-600 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3584996/pexels-photo-3584996.jpeg" 
                alt="About DXM Productions" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About DXM Productions</h2>
              <p className="text-xl text-gray-600 mb-6">
                DXM Productions is a professional photography studio based in Houston, Texas, specializing in portrait, event, and wedding photography.
              </p>
              <p className="text-gray-600 mb-8">
                With over 15 years of experience, Derrick Leadon has established himself as a versatile and skilled photographer in the Houston area. As an IT professional by day and a passionate photographer during his free time, Derrick brings a unique blend of technical expertise and creative vision to every shoot.
              </p>
              <Link 
                to="/about" 
                className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our video showcase to see how we capture beautiful moments.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <VideoShowcase 
              videoUrl="https://www.facebook.com/dleadon/videos/10216689953548202/?ref=embed_video&t=63"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our photography services.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Follow Us on Instagram</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest work and behind-the-scenes content.
            </p>
          </div>
          
          <InstagramFeed />
          
          <div className="text-center mt-10">
            <a 
              href="https://www.instagram.com/dxmproductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-600 transition-colors"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @dxmproductions
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Photography Session?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your photography needs and book your session.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default HomePage
