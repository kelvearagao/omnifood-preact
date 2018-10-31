import { h, Component } from 'preact';
import Contact from '../../components/section/contact';
import Plans from '../../components/section/plans';
import Testimonials from '../../components/section/testimonials';
import Cities from '../../components/section/cities';
import Steps from '../../components/section/steps';
import Showcases from '../../components/section/showcases';
import Features from '../../components/section/features';
import runScript from './script';
import Waypoint from 'react-waypoint';

class Home extends Component {
	componentDidMount() {
		runScript();
	}

	render() {
		console.log('teste')
		return (
			<div>
				<Features />
				<Showcases />
				<Waypoint onEnter={() => console.log('entrou')}>
					<Steps />
				</Waypoint>
				<Cities />
				<Testimonials />
				<Plans />
				<Contact />
			</div>
		);
	}
}

export default Home;
