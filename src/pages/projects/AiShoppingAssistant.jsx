import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('ai-shopping-assistant')

export default function AiShoppingAssistant() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`Customers using the supermarket platform often struggled to find products using keyword-only 
        search — especially when they didn't know the exact product name. They wanted to search by intent: 
        "something high in protein for post-workout" or "a quick dinner for two under £10." Standard search 
        couldn't handle natural language queries of that kind.`}
      solution={`Built a conversational AI assistant using LangChain with an OpenAI backbone and a custom 
        retrieval tool that queries the product vector store. The assistant maintains conversation history 
        via a session-scoped memory buffer, can recommend products, answer dietary questions, and build a 
        shopping list in real-time. The React frontend streams responses token-by-token for a smooth chat UX.`}
      results={[
        { metric: '60%', label: 'Query resolution without human help' },
        { metric: '2.1×', label: 'Longer session duration vs. keyword search' },
        { metric: '<1s', label: 'First-token latency (streaming)' },
        { metric: '4.6/5', label: 'User satisfaction score' },
      ]}
    />
  )
}
