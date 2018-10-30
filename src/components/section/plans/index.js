import { h } from 'preact';
import { Link } from 'preact-router/match';

const Plans = () => (
	<section class="section-plans js--section-plans" id="plans">
        <div class="row">
            <h2>Start eating healthy today</h2>
        </div>
        <div class="row">
            <div class="col span-1-of-3">
                <div class="plan-box js--wp-4">
                    <div>
                        <h3>Premium</h3>
                        <p class="plan-price">$399 <span>/ month</span></p>
                        <p class="plan-price-meal">That's only 13.30$ per meal</p>
                    </div>
                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal every day</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" class="btn btn-full">Sign up now</a>
                    </div>
                </div>
            </div>
            <div class="col span-1-of-3">
                <div class="plan-box">
                    <div>
                        <h3>Pro</h3>
                        <p class="plan-price">$149 <span>/ month</span></p>
                        <p class="plan-price-meal">That's only 14.90$ per meal</p>
                    </div>
                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal 10 days/month</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" class="btn btn-ghost">Sign up now</a>
                    </div>
                </div>
            </div>
            <div class="col span-1-of-3">
                <div class="plan-box">
                    <div>
                        <h3>Starter</h3>
                        <p class="plan-price">19$ <span>/ meal</span></p>
                        <p class="plan-price-meal">&nbsp;</p>
                    </div>
                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order from 8 am to 12 pm</li>
                            <li><i class="ion-ios-close-empty icon-small"></i></li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" class="btn btn-ghost">Sign up now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Plans;