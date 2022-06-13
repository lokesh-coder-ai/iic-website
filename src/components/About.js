import React from 'react';
import './about.css';

function About() {
    return (
        <div id="about">
            <div className="con">
                <div className="content">
                    <span>
                        <i className="bg far fa-bookmark"></i>
                        
                        <h3>About</h3>
                    </span>
                    <p> National Institute of Technology Calicut, with an aim of fostering entrepreneurship initiatives among the students has established Institution’s Innovation Cell in association with MHRD and the Ministry of HRD’s Innovation Cell (MHRD) in the year 2017-18. The role of IIC would be to identify and nurture technology based innovative startups.</p>
                </div>
                <div className="content">
                    <span>
                        <i className="bg fab fa-dochub"></i>
                        <h3>Objectives</h3>
                    </span>
                    <ul>

                        <li> To create a vibrant local innovation ecosystem.</li>
                        <li> Start-up supporting Mechanism.
                        </li>
                        <li> Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework.
                        </li>
                        <li> Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.</li>
                        <li>Develop better Cognitive Ability for Technology Students.</li>

                    </ul>
                </div>
            </div>

            <div className="image">
                <img src="rajpat1.webp" alt="rajpath" />
            </div>
        </div>
    );
};

export default About;