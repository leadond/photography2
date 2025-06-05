import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">About DXM Productions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing life's precious moments with creativity, passion, and technical excellence.
          </p>
        </div>

        {/* Photographer Bio */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="/derrick-leadon.jpg" 
              alt="Derrick Leadon - Founder of DXM Productions" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Derrick Leadon</h2>
            <h3 className="text-xl text-amber-600 mb-6">Founder & Lead Photographer</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                With over 15 years of experience in photography, Derrick Leadon has established himself as a versatile and skilled photographer in the Houston area. As an IT professional by day and a passionate photographer during his free time, Derrick brings a unique blend of technical expertise and creative vision to every shoot.
              </p>
              <p>
                Specializing in portrait photography, Derrick has a remarkable ability to capture the authentic essence of his subjects. His work is characterized by striking compositions, thoughtful lighting, and an eye for meaningful moments.
              </p>
              <p>
                Using professional Sony camera equipment, Derrick ensures the highest quality results for all his clients. His technical knowledge combined with his artistic sensibility allows him to create images that are both technically excellent and emotionally resonant.
              </p>
              <p>
                When not behind the camera, Derrick enjoys spending time with his family, exploring new photography techniques, and contributing to the local photography community in Houston, Texas.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Personalized Experience</h3>
              <p className="text-gray-600">
                We take the time to understand your vision and preferences, ensuring that each photoshoot is tailored to your unique style and needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Creative Direction</h3>
              <p className="text-gray-600">
                We bring creative ideas and professional guidance to every session, helping you look your best while capturing authentic moments.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Delivery</h3>
              <p className="text-gray-600">
                We provide professionally edited, high-resolution images with quick turnaround times and easy digital delivery.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Equipment */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Equipment</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Cameras</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Sony Alpha a7 III Mirrorless Digital Camera</li>
                  <li>Sony Alpha a7R IV Mirrorless Digital Camera</li>
                  <li>Sony Alpha a6600 Mirrorless Digital Camera (Backup)</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">Lenses</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Sony FE 24-70mm f/2.8 GM Lens</li>
                  <li>Sony FE 70-200mm f/2.8 GM OSS Lens</li>
                  <li>Sony FE 85mm f/1.4 GM Lens</li>
                  <li>Sony FE 35mm f/1.4 GM Lens</li>
                  <li>Sony FE 16-35mm f/2.8 GM Lens</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Lighting</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Profoto B10 Plus OCF Flash Head</li>
                  <li>Profoto A1X AirTTL Studio Light</li>
                  <li>Various Profoto Light Shaping Tools</li>
                  <li>Godox AD200Pro Pocket Flash Kit</li>
                  <li>Reflectors and Diffusers</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">Accessories</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Manfrotto Professional Tripods</li>
                  <li>DJI Ronin-S Gimbal Stabilizer</li>
                  <li>Portable Backdrop System</li>
                  <li>Professional Color Calibration Tools</li>
                  <li>High-capacity Storage Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-100 to-amber-200 p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to work with us?</h2>
          <p className="text-xl text-gray-700 mb-6">
            Let's create beautiful images together that you'll cherish for a lifetime.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default AboutPage
