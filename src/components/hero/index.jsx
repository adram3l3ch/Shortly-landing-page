import Button from '../button';
import Form from '../form';
import Illustration from '../../images/illustration-working.svg';
import './style.css';

const Hero = () => {
	return (
		<main className='hero'>
			<div className='container'>
				<div className='intro'>
					<div className='contents'>
						<h1 className='hero__title'>More than just shorter links</h1>
						<p className='hero__text'>
							Build your brand's recognition and get detailed insights on how links
							are performing.
						</p>
						<Button label='Get Started' classes='cta' />
					</div>
					<div className='image'>
						<img src={Illustration} alt='' aria-hidden />
					</div>
				</div>
				<Form />
			</div>
		</main>
	);
};
export default Hero;
