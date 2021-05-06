import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import Profile from "../../assets/myprofile.jpg";


export const About = () => (
    <div class='about'>
        <div class='container'>
            <div class="row mx-md-n5">
                <div class="col px-md-5">
                    <div class="p-3 border"><img src={ Profile } class="img-responsive img-thumbnail" /></div>
                </div>
                <div class="col px-md-5">
                    <div class="p-3 border bg-light">
                        <div class="about-title">
                            ABOUT ME
                            <hr class="my-4" />
                            <p>A man with a golden heart, a ML enthusiast, a researcher and mentor for those who want to dive deep in the world of Research and Analysis.
                                Shrirang is guiding peers of his College and other communities to become successfull in their technology of interest.
                            </p>
                            <p>Shrirang, who is now working as a TCSer is continously helping youth follow their passion and technology. His goal is to inspire every individual and 
                                get the best out of them.
                            </p>
                            <p>
                                For fulfillment of his vision, Shrirang keeps mentorig and guiding students feee of cost.
                                He also undertook a campaign of Cybersecurity Awareness with the help of Quick Heal Anti-Virus solutions and uplifted the lives of more than 1000 school going innocent students.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);