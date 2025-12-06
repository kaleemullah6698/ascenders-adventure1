"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
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
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#16a34a] mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have questions? We're here to help you start your next adventure.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#16a34a]" />
            <p>Office #12, Adventure Plaza, Islamabad, Pakistan</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#16a34a]" />
            <p>+92 300 1234567</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#16a34a]" />
            <p>support@ascenders.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="text-[#16a34a]" />
            <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
          </div>

          {/* Social Media */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-[#16a34a] hover:text-green-700">
                <Facebook />
              </Link>
              <Link href="#" className="text-[#16a34a] hover:text-green-700">
                <Instagram />
              </Link>
              <Link href="#" className="text-[#16a34a] hover:text-green-700">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-lg rounded-lg space-y-4 border"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#16a34a]">
            Send Us a Message
          </h2>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-md"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full border p-3 rounded-md"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded-md h-32"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Please fill required fields.</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#16a34a] text-white py-3 rounded-md font-semibold shadow-md hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>

        <Image
          src="https://placehold.co/900x400?text=Map+Placeholder"
          alt="Map Location"
          width={900}
          height={400}
          className="rounded-lg shadow-md"
          unoptimized
        />
      </section>
    </main>
  );
}
