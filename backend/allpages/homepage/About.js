import React from 'react';
import fillerImage from '../../assets/cat-filler.jpg';

function About() {
    return (
        <div>
            <p className='content'>
            With the busy lives we live we struggle to find time to cook and find recipes. No longer will it be a struggle once you start using Timely Meals.
                We aim to give users the best experience possible with easy to plan options.
            </p>
            <div>
                <article>
                    <div>
                        <h3>Home Page</h3>
                        <p> This will be your home page. It will show you your daily recipes you chosen for the day. With its design you can be ready for any meal you have planned</p>
                    </div>
                    <img className="about-img" src={fillerImage} alt="Home Page"/>
                </article>

                <article>
                    <div>
                        <h3>Find Recipes</h3>
                        <p> With our easy to use search bar you find recipes created by other users or from our large collection of recipes. With a single click you can add that recipe to your calander</p>
                    </div>
                    <img className="about-img" src={fillerImage} alt="Find Recipes"/>
                </article>

                <article>
                    <div>
                        <h3>Calender</h3>
                        <p> With your calender you will be able to see what days you have meals planned for. You can even click the day to see what you have planned. You can remove recipes from days of the calander</p>
                    </div>
                    <img className="about-img" src={fillerImage} alt="Calender"/>
                </article>

                <article>
                    <div>
                        <h3>Create Your Own Recipe</h3>
                        <p> With the ability to create your own recipes you can save them for yourself or you can post them for other users to find.</p>
                    </div>
                    <img className="about-img" src={fillerImage} alt="Create Recipes"/>
                </article>
           </div>
        </div>
    );
}

export default About;
