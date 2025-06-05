import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

// Define types
interface PhotoData {
  id: string;
  title: string;
  description: string;
  url: string;
  created_at: string;
  category: string;
}

const MyPhotosPage = () => {
  const [photos, setPhotos] = useState<PhotoData[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')

  // Sample data for now
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPhotos([
        {
          id: '1',
          title: 'Family Portrait Session',
          description: 'Family portrait session at Memorial Park',
          url: 'https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg',
          created_at: '2023-04-15',
          category: 'portrait'
        },
        {
          id: '2',
          title: 'Corporate Headshot',
          description: 'Professional headshot for LinkedIn profile',
          url: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
          created_at: '2023-03-22',
          category: 'portrait'
        },
        {
          id: '3',
          title: 'Wedding Photos',
          description: 'Selection from your wedding day photography',
          url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
          created_at: '2023-02-14',
          category: 'wedding'
        },
        {
          id: '4',
          title: 'Birthday Party',
          description: 'Photos from your son\'s birthday party',
          url: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg',
          created_at: '2023-01-30',
          category: 'event'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeTab)

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Photos</h1>
        
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button 
            className={`px-4 py-2 ${activeTab === 'all' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('all')}
          >
            All Photos
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'portrait' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('portrait')}
          >
            Portraits
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'wedding' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('wedding')}
          >
            Weddings
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'event' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('event')}
          >
            Events
          </button>
        </div>
        
        {/* Photos Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : filteredPhotos.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No photos found</h3>
            <p className="mt-1 text-sm text-gray-500">You don't have any photos in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{photo.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{photo.created_at}</span>
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default MyPhotosPage
