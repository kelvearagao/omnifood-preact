import { h } from 'preact';
import { Link } from 'preact-router/match';

const Showcases = () => (
	<section class="section-meals">
        <ul class="meals-showcase clearfix">
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/3.jpg" alt="Chicken breast steak with vegetables" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/4.jpg" alt="Autumn pumpkin soup" />
                </figure>
            </li>
        </ul>
        <ul class="meals-showcase clearfix">
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/5.jpg" alt="Paleo beef steak with vegetables" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/6.jpg" alt="Healthy baguette with egg and vegetables" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/7.jpg" alt="Burger with cheddar and bacon" />
                </figure>
            </li>
            <li>
                <figure class="meal-photo">
                    <img src="assets/resources/img/8.jpg" alt="Granola with cherries and strawberries" />
                </figure>
            </li>
        </ul>
    </section>
);

export default Showcases;