import Navbar from '../navbar';

const Header = () => (
	<header>
		<nav>
			<div class="row">
				<img
					src="../assets/resources/img/logo-white.png"
					alt="Omnifood logo"
					class="logo"
				/>
				<img
					src="../assets/resources/img/logo.png"
					alt="Omnifood logo"
					class="logo-black"
				/>
				<Navbar />
			</div>
		</nav>
		<div class="hero-text-box">
			<h1>
				Goodbye junk food.
				<br />
				Hello super healthy meals.
			</h1>
			<a class="btn btn-full js--scroll-to-plans" href="#">
				I'm hungry
			</a>
			<a class="btn btn-ghost js--scroll-to-start" href="#">
				Show me more
			</a>
		</div>
	</header>
);

export default Header;
