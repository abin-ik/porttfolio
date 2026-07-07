import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('supermarket-platform')

export default function SupermarketPlatform() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`The client operated a mid-size supermarket chain with no digital presence beyond a basic static website. 
        Customers had no way to browse products online, compare prices, or place orders. Internally, inventory was 
        managed through spreadsheets with no real-time tracking. The challenge was to build a full-stack platform 
        from scratch — product catalogue, semantic search, AI recommendations, and an admin dashboard — all within 
        a tight timeline and budget.`}
      solution={`We designed a Django + FastAPI monorepo architecture: Django for the admin CMS and database ORM, 
        FastAPI for the high-performance product API and AI endpoints. Products are stored in PostgreSQL with 
        pgvector for semantic similarity. Sentence-Transformers generates embeddings at index time. Redis caches 
        hot product lookups. Everything is containerised with Docker and served via Nginx. The AI recommendation 
        engine surfaces related products in real-time based on cart contents and browsing history.`}
      results={[
        { metric: '10k+', label: 'Products indexed' },
        { metric: '<200ms', label: 'Average search latency' },
        { metric: '35%', label: 'Increase in average order value' },
        { metric: '99.8%', label: 'Uptime over 90 days' },
      ]}
    />
  )
}
