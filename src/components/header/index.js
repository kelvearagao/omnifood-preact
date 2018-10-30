import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

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
				<a class="mobile-nav-icon js--nav-icon">
					<i class="ion-navicon-round" />
				</a>
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

/*
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
*/
