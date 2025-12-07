import Image from "next/image";
import Link from "next/link";
import { Users, Award, ShieldCheck, Mountain, Target, Heart } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const team: TeamMember[] = [
  { name: "Ali Khan", role: "Founder & CEO", photo: "https://picsum.photos/id/1005/300/300" },
  { name: "Sara Ahmed", role: "Operations Manager", photo: "https://picsum.photos/id/1011/300/300" },
  { name: "Bilal Shah", role: "Lead Guide", photo: "https://picsum.photos/id/1012/300/300" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Ascenders Adventure
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            We are dedicated to providing unforgettable trekking experiences in the
            majestic mountains of Pakistan. Our mission is to make adventure safe,
            accessible, and exhilarating.
          </p>
          <Link 
            href="/treks" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Explore Our Treks
          </Link>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Mission / Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="text-green-600 h-8 w-8" />
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2018, Ascenders Adventure has been leading the trekking scene
                in Pakistan, helping adventurers of all levels explore breathtaking
                landscapes safely and responsibly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to connect people with nature while promoting
                sustainable tourism and supporting local communities throughout Pakistan&apos;s
                magnificent mountain regions.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/id/1015/600/400"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our top priority. We maintain the highest standards 
                with certified guides and proper equipment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote eco-friendly practices and leave no trace, preserving 
                nature for future generations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                We work closely with local communities, creating economic 
                opportunities and cultural exchange.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements / Stats */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600 h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">50+</h3>
              <p className="text-gray-700 font-medium">Trekking Expeditions</p>
              <p className="text-gray-600 text-sm mt-2">Across Pakistan&apos;s highest peaks</p>
            </div>
            
            <div className="p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600 h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">1000+</h3>
              <p className="text-gray-700 font-medium">Happy Adventurers</p>
              <p className="text-gray-600 text-sm mt-2">From around the world</p>
            </div>
            
            <div className="p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-green-600 h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Safety Record</p>
              <p className="text-gray-600 text-sm mt-2">With certified guides</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-lg shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey through Pakistan&apos;s most stunning landscapes. 
            Let&apos;s create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/treks" 
              className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
            >
              Browse Treks
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-900 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}