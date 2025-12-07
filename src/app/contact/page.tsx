"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    // Simulate success
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Have questions about your next adventure? We&apos;re here to help you plan the perfect trek.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Contact Info + Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">Office #12, Adventure Plaza<br/>Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@ascenders.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday – Saturday<br/>9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                    <Facebook className="text-green-600 h-6 w-6" />
                  </Link>
                  <Link href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                    <Instagram className="text-green-600 h-6 w-6" />
                  </Link>
                  <Link href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                    <Youtube className="text-green-600 h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <Send className="text-green-600 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+92 300 1234567"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Trek Inquiry"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your trekking plans..."
                  className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  ✗ Please fill in all required fields.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
          
          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5667539513!2d72.80967889999999!3d33.6144396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ascenders Adventure Location"
            />
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-gray-700">
              <strong className="text-gray-900">Note:</strong> Our office is located in the heart of Islamabad, 
              easily accessible from all major areas of the city. Free parking available for visitors.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}