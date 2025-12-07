'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Calendar, ShieldCheck, Backpack, Mail, Phone, MapPin } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  icon: any
  questions: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: "Booking & Reservations",
    icon: Calendar,
    questions: [
      {
        question: "How far in advance should I book my trek?",
        answer: "We recommend booking at least 2-3 months in advance, especially for popular treks like K2 Base Camp and Fairy Meadows. For peak seasons (Spring and Summer), book 4-6 months ahead to secure your spot and get the best rates."
      },
      {
        question: "What is included in the trekking package price?",
        answer: "Our packages include: experienced certified guide, porter services, accommodation during trek, all meals (breakfast, lunch, dinner), necessary permits, transportation to/from trek starting point, and comprehensive medical kit. Exclusions: personal expenses, travel insurance, tips, and alcoholic beverages."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 30+ days before departure: 90% refund. 15-29 days: 50% refund. 8-14 days: 25% refund. Less than 7 days: no refund. We strongly recommend purchasing travel insurance for unexpected circumstances and weather-related delays."
      },
      {
        question: "Can I get a custom itinerary?",
        answer: "Absolutely! We specialize in creating custom itineraries based on your fitness level, time constraints, interests, and budget. Contact us with your requirements, and our experienced team will design the perfect trek tailored to your needs."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer attractive discounts for groups: 4-6 people get 5% discount, 7-10 people get 10% discount, and 10+ people get 15% discount. Contact us for custom group pricing and special corporate packages."
      }
    ]
  },
  {
    category: "Safety & Health",
    icon: ShieldCheck,
    questions: [
      {
        question: "What safety measures do you have in place?",
        answer: "We provide: experienced certified guides with wilderness first aid training, emergency oxygen cylinders, portable altitude chambers (PAC), satellite phones for remote areas, comprehensive first aid kits, regular health monitoring, and detailed emergency evacuation plans with helicopter backup."
      },
      {
        question: "How do you handle altitude sickness?",
        answer: "We follow strict acclimatization schedules with gradual altitude gain, monitor oxygen saturation levels daily using pulse oximeters, provide Diamox medication when needed (after medical consultation), and have immediate descent protocols. Our guides are trained to recognize early symptoms and take appropriate action."
      },
      {
        question: "What is the guide-to-trekker ratio?",
        answer: "For standard treks: 1 certified guide per 4-6 trekkers. For difficult/technical treks: 1 guide per 2-4 trekkers. We also provide 1 experienced porter for every 2 trekkers to carry luggage (maximum 15kg per porter as per regulations)."
      },
      {
        question: "Do I need travel insurance?",
        answer: "Yes, comprehensive travel insurance with emergency helicopter evacuation coverage up to 6,000 meters is mandatory. It should cover high-altitude trekking, medical emergencies, trip cancellation, and altitude-related illnesses. We can recommend reliable insurance providers."
      },
      {
        question: "What if there's an emergency during the trek?",
        answer: "We have satellite communication devices, emergency oxygen, and established evacuation procedures with multiple backup plans. In case of serious emergency, helicopter evacuation to the nearest hospital is arranged immediately (covered by your insurance). We maintain 24/7 emergency contact."
      }
    ]
  },
  {
    category: "Equipment & Preparation",
    icon: Backpack,
    questions: [
      {
        question: "What equipment do you provide?",
        answer: "We provide: high-quality down jacket (rated for -20°C), four-season sleeping bag, duffel bag for porters, trekking poles, and comprehensive medical kit. You need to bring: personal hiking boots, clothing layers, toiletries, and personal medications."
      },
      {
        question: "What is the difficulty level of your treks?",
        answer: "We offer treks from Easy (Grade 1: 2-4 hours daily walking on well-maintained trails) to Extreme (Grade 5: 6-8+ hours with high altitude and technical sections). Each trek page includes detailed difficulty rating, daily walking times, altitude profiles, and terrain descriptions."
      },
      {
        question: "What physical fitness is required?",
        answer: "You should be able to walk 5-7 hours daily with a light daypack (5-7kg). We recommend 2-3 months of preparation including: cardiovascular exercises (running, cycling), stair climbing with weighted backpack, and weekend hiking. Consult your doctor before booking."
      },
      {
        question: "What should I pack for the trek?",
        answer: "Essential items: broken-in waterproof hiking boots, moisture-wicking base layers, insulating mid-layers, waterproof jacket and pants, sun protection (hat, sunglasses, SPF 50+), headlamp with extra batteries, water purification tablets, personal medications, and power bank. We provide a detailed packing list upon booking confirmation."
      },
      {
        question: "Can I rent equipment in Pakistan?",
        answer: "Yes, quality trekking equipment can be rented in Islamabad at reasonable prices (₨500-2000/day depending on item). We can assist with recommendations for reliable rental shops with genuine branded equipment and proper sizing."
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Find answers to common questions about our trekking adventures in Pakistan. 
            Everything you need to know before your journey begins.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Search Hint */}
        <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
          <p className="text-blue-900">
            <strong>Pro Tip:</strong> Use Ctrl+F (or Cmd+F on Mac) to quickly search for specific topics
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqData.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems[key]
                  
                  return (
                    <div key={key}>
                      <button
                        className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-green-50 transition-colors duration-200 group"
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4 text-lg group-hover:text-green-700 transition-colors">
                          {item.question}
                        </span>
                        <div className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="h-6 w-6 text-green-600" />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-5 pt-2">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-700 rounded-xl shadow-lg p-8 md:p-10 text-center text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Our experienced team is available 24/7 to help you plan your perfect adventure. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-base font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-green-700 transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </a>
            <a
              href="tel:+923001234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-base font-semibold rounded-lg text-green-700 bg-white hover:bg-green-50 transition-all duration-200 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
            <p className="text-gray-600 text-sm mb-3">Get detailed responses within 24 hours</p>
            <a href="mailto:support@ascenders.com" className="text-green-600 font-semibold hover:underline">
              support@ascenders.com
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Phone & WhatsApp</h4>
            <p className="text-gray-600 text-sm mb-3">Quick replies for urgent queries</p>
            <a href="tel:+923001234567" className="text-green-600 font-semibold hover:underline">
              +92 300 1234567
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Visit Office</h4>
            <p className="text-gray-600 text-sm mb-3">Mon-Sat: 9 AM - 6 PM</p>
            <a href="/contact" className="text-green-600 font-semibold hover:underline">
              View Location
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}