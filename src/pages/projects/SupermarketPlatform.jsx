import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('supermarket-platform')

export default function SupermarketPlatform() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`The client needed a full production e-commerce platform to sell groceries online — not a demo, 
        a system that could actually run a real supermarket business. That meant a customer-facing app (website 
        and Android) with real payments, a catalogue of 25,000+ products across categories, subcategories, and 
        brands, and an admin system for staff to manage inventory, orders, offers, and customers day-to-day. 
        On top of that, product photography and structured data for 25,000 SKUs didn't exist at all — a 
        first-time data entry problem too large to do by hand — and there was no way to keep the in-store 
        database and the live VPS database in sync without manual work.`}
      solution={`I built the platform as a Django REST Framework backend with a modular, domain-driven app 
        structure — separate apps for accounts, products, inventory, cart, orders, payments, rewards, reviews, 
        offers, promo codes, referrals, and notifications — backed by JWT authentication with token blacklisting 
        for secure logout. The customer experience spans a Next.js website and a React Native (Expo) Android app, 
        both talking to the same API, with Firebase Auth, Razorpay and Cash on Delivery for payments, a 
        Diamonds/rewards loyalty system, referrals, bundles, and banners — plus an in-app AI shopping assistant 
        for instant answers on delivery, offers, and rewards. On the admin side, staff get a dashboard for 
        inventory, orders, products, customers, offers, and banners — all in one place.

        Two problems were solved with custom-built automation rather than manual labor. I built a scraping agent, 
        running locally with Qwen models, that searches the web for each product, finds a matching image, removes 
        the background, and composites it onto a clean white background — while also extracting the product's 
        category, brand, and a written description. This turned the 25,000-product cold start into a fully 
        automated pipeline. Second, I wrote a custom sync script that reconciles the local in-store database with 
        the live VPS database every hour, packaged as a Windows .exe so store staff can run it without any 
        technical setup. The backend runs on a VPS behind Nginx, containerized with Docker, with Celery Beat 
        handling scheduled tasks.`}
      results={[
        { metric: '25,000+', label: 'Products in the live catalogue' },
        { metric: 'Live', label: 'Published on Google Play Store' },
        { metric: '100%', label: 'Automated image & data pipeline' },
        { metric: 'Hourly', label: 'Automated DB sync, zero drift' },
      ]}
    />
  )
}
