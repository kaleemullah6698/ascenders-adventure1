export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Ascenders Adventure</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to Ascenders Adventure, your premier trekking and mountaineering service provider in Pakistan. 
              With years of experience and a passion for the majestic mountains of Pakistan, we offer unforgettable 
              adventures that combine safety, excitement, and breathtaking natural beauty.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To make the stunning landscapes of Pakistan accessible to adventure enthusiasts while maintaining 
              the highest standards of safety, environmental responsibility, and cultural respect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="text-gray-600 mb-6 list-disc list-inside space-y-2">
              <li>Expert-guided treks to K2 Base Camp, Nanga Parbat, and other iconic peaks</li>
              <li>Multiple service levels from Basic to Premium Elite experiences</li>
              <li>Comprehensive safety equipment and emergency protocols</li>
              <li>Cultural immersion experiences with local communities</li>
              <li>Customized itineraries for groups and individual travelers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Our team consists of certified mountain guides, experienced porters, and adventure specialists 
              who are passionate about sharing the beauty of Pakistan's northern areas with the world. 
              Each member is trained in wilderness first aid and high-altitude safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}