import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('cnn-image-detector')

export default function CnnImageDetector() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`The supermarket platform needed a way to automatically classify product images uploaded by 
        suppliers — assigning the correct category, flagging low-quality or mislabelled images, and 
        detecting damaged packaging. Manual review was a bottleneck that scaled poorly as the catalogue grew.`}
      solution={`Trained a custom CNN classifier using PyTorch on a labelled dataset of ~50,000 product 
        images. The model uses a ResNet-50 backbone fine-tuned on the product taxonomy. An OpenCV preprocessing 
        pipeline normalises image quality before inference. The trained model is served via a FastAPI endpoint 
        and called asynchronously when new product images are uploaded, with results stored in PostgreSQL.`}
      results={[
        { metric: '94.2%', label: 'Top-1 classification accuracy' },
        { metric: '50k+', label: 'Training images used' },
        { metric: '120ms', label: 'Inference time per image' },
        { metric: '80%', label: 'Reduction in manual review time' },
      ]}
    />
  )
}
