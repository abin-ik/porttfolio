import CaseStudyLayout from '../../components/case-study/CaseStudyLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('neural-network-scratch')

export default function NeuralNetworkScratch() {
  return (
    <CaseStudyLayout
      project={project}
      problem={`Most ML developers rely on frameworks like PyTorch or TensorFlow without deeply understanding 
        what happens under the hood — how gradients propagate, how weights are updated, or why certain 
        activation functions work better in specific architectures. This project was motivated by the belief 
        that truly understanding deep learning requires building it from first principles.`}
      solution={`Implemented a fully functional neural network library using only NumPy — no ML frameworks. 
        The library supports arbitrary layer depth, multiple activation functions (ReLU, Sigmoid, Tanh, Softmax), 
        mini-batch gradient descent, and backpropagation via the chain rule. Trained and validated on MNIST 
        (digit classification) and a toy regression dataset. The project is documented as a Jupyter Notebook 
        series for educational use.`}
      results={[
        { metric: '97.3%', label: 'Accuracy on MNIST test set' },
        { metric: '0', label: 'External ML frameworks used' },
        { metric: '6', label: 'Notebook chapters published' },
        { metric: '100%', label: 'Backprop implemented from scratch' },
      ]}
    />
  )
}
