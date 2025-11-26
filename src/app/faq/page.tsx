import FAQ from '../../../components/faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Ascenders Adventure',
  description: 'Frequently asked questions about trekking in Nepal.',
}

export default function FAQPage() {
  return <FAQ />
}