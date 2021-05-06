import React from 'react';
import './header.styles.css';

import { NavBar } from '../navbar/navbar.component';

export const Header = () => (
    <div class="header">
        <NavBar />
        <div class="jumbotron intro">
            <h1 class="display-3">Hi! I am Shrirang Shripad Rajguru.</h1>
            <p class="lead">I am Mumbai based Computer Engineer. A voracious learner of technologies and Machine Learning enthusiast.</p>
            <hr class="my-5"/>
        </div>
    </div>
);
