import Navbar from './components/Navbar'
import Home from './components/Home'
import Why from './components/Why'
import Footer from './components/Footer'
import Insight from './components/Insight'
import Testimony from './components/Testimony'

function App() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <Home />
      <Why />
      <Insight />
      <Testimony />
      <Footer />
    </div>
  )
}

export default App
