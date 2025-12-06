'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  questions: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        question: "How far in advance should I book my trek?",
        answer: "We recommend booking at least 2-3 months in advance, especially for popular treks like Everest Base Camp and Annapurna Circuit. For peak seasons (Spring and Autumn), book 4-6 months ahead to secure your spot."
      },
      {
        question: "What is included in the trekking package price?",
        answer: "Our packages include: experienced guide, porter services, accommodation during trek, all meals (breakfast, lunch, dinner), necessary permits, transportation to/from trek starting point, and basic medical kit. Exclusions: personal expenses, travel insurance, tips, and alcoholic beverages."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 30+ days before departure: 90% refund. 15-29 days: 50% refund. 8-14 days: 25% refund. Less than 7 days: no refund. We recommend purchasing travel insurance for unexpected circumstances."
      },
      {
        question: "Can I get a custom itinerary?",
        answer: "Yes! We specialize in creating custom itineraries based on your fitness level, time constraints, and interests. Contact us with your requirements, and we'll design the perfect trek for you."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer discounts for groups of 4 or more people. Group of 4-6: 5% discount, 7-10: 10% discount, 10+: 15% discount. Contact us for custom group pricing."
      }
    ]
  },
  {
    category: "Safety & Health",
    questions: [
      {
        question: "What safety measures do you have in place?",
        answer: "We provide: experienced certified guides, emergency oxygen, portable altitude chambers, satellite phones, comprehensive first aid training, regular health checks, and emergency evacuation plans. All guides are trained in wilderness first aid."
      },
      {
        question: "How do you handle altitude sickness?",
        answer: "We follow proper acclimatization schedules, monitor oxygen levels daily, provide Diamox when needed, and have immediate descent plans. Our guides are trained to recognize symptoms early and take appropriate action."
      },
      {
        question: "What is the guide-to-trekker ratio?",
        answer: "For standard treks: 1 guide per 4-6 trekkers. For difficult treks: 1 guide per 2-4 trekkers. We also provide 1 porter for every 2 trekkers to carry luggage."
      },
      {
        question: "Do I need travel insurance?",
        answer: "Yes, comprehensive travel insurance with emergency helicopter evacuation coverage is mandatory. It should cover high-altitude trekking up to 6,000 meters and include medical coverage for altitude-related illnesses."
      },
      {
        question: "What if there's an emergency during the trek?",
        answer: "We have satellite communication, emergency oxygen, and established evacuation procedures. In case of serious emergency, helicopter evacuation to Kathmandu is arranged immediately (covered by your insurance)."
      }
    ]
  },
  {
    category: "Equipment & Preparation",
    questions: [
      {
        question: "What equipment do you provide?",
        answer: "We provide: down jacket, sleeping bag, duffel bag, trekking poles, and medical kit. You need to bring personal items like hiking boots, clothing, and personal medications."
      },
      {
        question: "What is the difficulty level of your treks?",
        answer: "We offer treks from easy (Grade 1: 2-4 hours walking) to challenging (Grade 5: 6-8 hours with high altitude). Each trek description includes difficulty rating, daily walking times, and altitude information."
      },
      {
        question: "What physical fitness is required?",
        answer: "You should be able to walk 5-7 hours daily with a light daypack. We recommend 2-3 months of preparation including cardio, stair climbing, and hiking with a loaded backpack."
      },
      {
        question: "What should I pack for the trek?",
        answer: "Essential items: broken-in hiking boots, moisture-wicking clothing, warm layers, waterproof jacket, sun protection, headlamp, water purification, personal medications. We provide a detailed packing list upon booking."
      },
      {
        question: "Can I rent equipment in Nepal?",
        answer: "Yes, quality equipment can be rented in Kathmandu and Pokhara at reasonable prices. We can assist with recommendations for reliable rental shops with genuine equipment."
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our trekking adventures. Can't find what you're looking for?
        </p>
      </div>

      <div className="space-y-8">
        {faqData.map((category, categoryIndex) => (
          <div key={category.category} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">{category.category}</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {category.questions.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`
                const isOpen = openItems[key]
                
                return (
                  <div key={key} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                    >
                      <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 p-8 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">
          Our support team is here to help you with any additional questions.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}