import Image from "next/image";
import Link from "next/link";
import { Users, Award, ShieldCheck } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

// Placeholder team images using Picsum
const team: TeamMember[] = [
  { name: "Ali Khan", role: "Founder & CEO", photo: "https://picsum.photos/id/1005/300/300" },
  { name: "Sara Ahmed", role: "Operations Manager", photo: "https://picsum.photos/id/1011/300/300" },
  { name: "Bilal Shah", role: "Lead Guide", photo: "https://picsum.photos/id/1012/300/300" },
];

export default function AboutUsPage() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#16a34a] mb-4">
          About Ascenders Adventure
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          We are dedicated to providing unforgettable trekking experiences in the
          majestic mountains of Pakistan. Our mission is to make adventure safe,
          accessible, and exhilarating.
        </p>
        <div className="mt-6">
          <Link href="/treks" className="bg-[#16a34a] text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition">
            Explore Treks
          </Link>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="https://picsum.photos/id/1015/600/400"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#16a34a] mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2018, Ascenders Adventure has been leading the trekking scene
            in Pakistan, helping adventurers of all levels explore breathtaking
            landscapes safely and responsibly.
          </p>
          <p className="text-gray-700">
            Our mission is to connect people with nature while promoting
            sustainable tourism and local communities.
          </p>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Award className="mx-auto text-[#16a34a]" size={36} />
          <h3 className="text-2xl font-bold mt-2">50+</h3>
          <p className="text-gray-600">Trekking Expeditions</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Users className="mx-auto text-[#16a34a]" size={36} />
          <h3 className="text-2xl font-bold mt-2">200+</h3>
          <p className="text-gray-600">Happy Adventurers</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ShieldCheck className="mx-auto text-[#16a34a]" size={36} />
          <h3 className="text-2xl font-bold mt-2">5</h3>
          <p className="text-gray-600">Certifications</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-[#16a34a] mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white shadow-md rounded-lg p-6 text-center">
              <Image
                src={member.photo}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values / CTA */}
      <section className="bg-[#16a34a] text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
        <p className="mb-6">
          Safety, sustainability, and unforgettable experiences are at the heart of
          everything we do.
        </p>
        <Link href="/contact-us" className="bg-white text-[#16a34a] px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
