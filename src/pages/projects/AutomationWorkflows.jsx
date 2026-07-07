import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('automation-workflows')

export default function AutomationWorkflows() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`The operations team spent hours each week manually running reports, exporting data, and 
        copying information between systems. Inventory reconciliation alone took 4+ hours per week. 
        Any system downtime went undetected until users reported it. There was no CI/CD pipeline — 
        deployments were manual, error-prone, and nerve-wracking.`}
      solution={`Designed and built a suite of automation workflows using Python, Celery, and Redis. 
        Scheduled tasks handle nightly inventory reconciliation, weekly sales report generation (emailed 
        as formatted PDFs), and real-time health checks via Celery Beat + custom alerting webhooks. 
        A GitHub Actions CI/CD pipeline automates testing, linting, and deployment on every merge to main.`}
      results={[
        { metric: '20h', label: 'Saved per week across the team' },
        { metric: '<2min', label: 'Deployment time (was 45min manual)' },
        { metric: '100%', label: 'Report delivery reliability' },
        { metric: '0', label: 'Undetected outages since deployment' },
      ]}
    />
  )
}
