import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

export const NavBar = () => (
<nav class="navbar navbar-expand-sm scrolling-navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto me-2">
                <li class="nav-item">
                <button class="btn btn-outline-light my-2 py-1" type="submit">HOME</button>
                </li>
                <li class="nav-item">
                <button class="btn btn-outline-light my-2 py-1" type="submit">ABOUT</button>
                </li>
                <li class="nav-item">
                <button class="btn btn-outline-light my-2 py-1" type="submit">RESUME</button>
                </li>
                <li class="nav-item">
                <button class="btn btn-outline-light my-2 py-1" type="submit">WORKS</button>
                </li>
                <li class="nav-item">
                <button class="btn btn-outline-light my-2 py-1" type="submit">TESTIMONIALS</button>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-light" type="submit">Say Hello!</button>
            </form>
        </div>
</nav>
);