import { h, Component } from 'preact';
import Contact from '../../components/section/contact';
import Plans from '../../components/section/plans';
import Testimonials from '../../components/section/testimonials';
import Cities from '../../components/section/cities';
import Steps from '../../components/section/steps';
import Showcases from '../../components/section/showcases';
import Features from '../../components/section/features';
import runScript from './script';

class Home extends Component {
	componentDidMount() {
		runScript();
	}

	render() {
		return (
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
	}
}

export default Home;
