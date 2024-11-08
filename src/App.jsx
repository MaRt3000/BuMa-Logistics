import Reason from './components/Reason'
import Header from '../src/components/Header.jsx'
import HeroSection from '../src/components/HeroSection.jsx'
import Footer from '../src/components/Footer.jsx'
import { OurService } from './components/OurService.jsx'
import GlobalWithEase from './components/GlobalWithEase.jsx'
import Article from './components/Article.jsx'

function App() {
  
  return (
    <>
    <Header />
    <HeroSection />
    <GlobalWithEase />
    <OurService />
    <Article />
     <Reason />
     <Footer />
    </>
  )
}

export default App
