import './style.css';
import { Component } from 'preact';

class MobileNav extends Component {

	state = {
		wasClicked: false
	}

	handleClick() {
		this.props.onClick && this.props.onClick();
		this.setState({
			wasClicked: !this.state.wasClicked
		});
	}

	render(props, state) { 
		const { onClick } = props;
		const { wasClicked } = state;

		return (
			<a class="mobile-nav-icon js--nav-icon" onClick={ this.handleClick.bind(this) } >
				<i class={ !wasClicked ? 'ion-navicon-round' : 'ion-close-round' } />
			</a>
		);
	}
}

export default MobileNav;
