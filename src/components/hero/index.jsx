import Button from '../button';
import Form from '../form';

const Hero = () => {
	return (
		<main className='hero'>
			<h1 className='hero__title'>More than just shorter links</h1>
			<p className='hero__text'>
				Build your brand's recognition and get detailed insights on how links are
				performing.
			</p>
			<Button label='Get Started' classes='cta' />
			<Form />
		</main>
	);
};
export default Hero;
