import './style.css';
import MobileNav from '../mobilenav';
import { Component } from 'preact';

/**
 * Todo: remover jquery; Componentizar main-nav;
 * 
 */
class Navbar extends Component {

	handleMobileNavClick() {
		this.$el.slideToggle(200);
	}

	componentDidMount() {
		this.$el = $(this.base).find('.js--main-nav');
	}

	render() {
		return (
			<div>
				<ul class="main-nav js--main-nav ">
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

				<MobileNav onClick={this.handleMobileNavClick.bind(this)} />
			</div>
		);
	}
}

export default Navbar;