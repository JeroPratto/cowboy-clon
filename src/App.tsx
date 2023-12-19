import { AtYourServiceSection } from './components/AtYourServiceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MainSection } from './components/MainSection'
import { Navbar } from './components/Navbar'
import { VideoSection } from './components/VideoSection'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<MainSection />
			<VideoSection />
			<AtYourServiceSection />
			<Footer />
		</>
	)
}

export default App
