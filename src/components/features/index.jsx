import FeatureCards from '../featureCards';

const Features = () => {
	return (
		<section className='features'>
			<h2 className='features__title'>Advanced Statistics</h2>
			<p className='features__text'>
				Track how your links are performing across the web with our advanced statistics
				dashboard.
			</p>
			<FeatureCards />
		</section>
	);
};

export default Features;
