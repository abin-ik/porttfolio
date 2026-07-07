import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'

// Top-level pages
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'

// Individual project pages
import SupermarketPlatform from '../pages/projects/SupermarketPlatform'
import AiShoppingAssistant from '../pages/projects/AiShoppingAssistant'
import CnnImageDetector from '../pages/projects/CnnImageDetector'
import NeuralNetworkScratch from '../pages/projects/NeuralNetworkScratch'
import AutomationWorkflows from '../pages/projects/AutomationWorkflows'
import Concepts from '../pages/projects/Concepts'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          {/* Top-level routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual project case studies */}
          <Route
            path="/projects/supermarket-platform"
            element={<SupermarketPlatform />}
          />
          <Route
            path="/projects/ai-shopping-assistant"
            element={<AiShoppingAssistant />}
          />
          <Route
            path="/projects/cnn-image-detector"
            element={<CnnImageDetector />}
          />
          <Route
            path="/projects/neural-network-scratch"
            element={<NeuralNetworkScratch />}
          />
          <Route
            path="/projects/automation-workflows"
            element={<AutomationWorkflows />}
          />
          <Route path="/projects/concepts" element={<Concepts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
