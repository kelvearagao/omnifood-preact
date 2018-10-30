import './style.css';
import MobileNav from '../mobilenav';
import { Component } from 'preact';

class Navbar extends Component {
	state = {
		mobileNavWasClicked: false
	}

	handleMobileNavClick() {
		this.$el.slideToggle(200);
		this.setState({ mobileNavWasClicked: true });
	}

	constructor(props) {
		super(props);
		this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
	}

	componentDidMount() {
		this.$el = $(this.base).find('.js--main-nav');
	}

	render() {
		return (
			<div>
				<ul class="main-nav js--main-nav">
					<li>
						<a href="#features">Food delivery</a>
					</li>
					<li>
						<a href="#works">How it works</a>
					</li>
					<li>
						<a href="#cities">Our cities</a>
					</li>
					<li>
						<a href="#plans">Sign up</a>
					</li>
				</ul>
				<a
					class="mobile-nav-icon js--nav-icon"
					onClick={this.handleMobileNavClick}
				>
					<i
						class={
							!this.state.mobileNavWasClicked
								? 'ion-navicon-round'
								: 'ion-close-round'
						}
					/>
				</a>
			</div>
		);
	}
}

export default Navbar;
