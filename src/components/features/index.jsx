import FeatureCards from '../featureCards';
import './style.css';

const Features = () => {
	return (
		<section className='features'>
			<div className='container'>
				<h2 className='features__title'>Advanced Statistics</h2>
				<p className='features__text'>
					Track how your links are performing across the web with our advanced statistics
					dashboard.
				</p>
				<FeatureCards />
			</div>
		</section>
	);
};

export default Features;
