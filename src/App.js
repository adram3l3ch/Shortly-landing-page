import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Outro from './components/outro';

function App() {
	return (
		<div className='app'>
			<Header />
			<Hero />
			<Features />
			<Outro />
			<Footer />
		</div>
	);
}

export default App;
