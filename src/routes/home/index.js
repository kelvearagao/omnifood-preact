import { h } from 'preact';
import style from './style';
import Contact from '../../components/section/contact'
import Plans from '../../components/section/plans'
import Testimonials from '../../components/section/testimonials'
import Cities from '../../components/section/cities'
import Steps from '../../components/section/steps'
import Showcases from '../../components/section/showcases'
import Features from '../../components/section/features'

const Home = () => (
	<div>
		<Features />
		<Showcases />
		<Steps />
		<Cities />
		<Testimonials />
		<Plans />
		<Contact />
	</div>
);

export default Home;
