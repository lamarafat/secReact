import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </>
  )
 
}
export default App
