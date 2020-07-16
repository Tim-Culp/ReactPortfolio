import React, { useState, useEffect } from 'react';
import {Container, Row} from "reactstrap";
import "./MyWork.css";
import APIProjIMG from './thumbs/apiproj.png';
import DreamCatcherIMG from "./thumbs/dreamcatcher.png";
import PKMNIMG from "./thumbs/pkmnproj.png";
import StaticLayoutIMG from "./thumbs/staticlayout.png";
import BirthdayIMG from "./thumbs/birthday.png";

let MyWork = () => {
    return (
        <div>
            <Row>
            <div id="Header"/>
            </Row>
            <Container>
                    <h1 class="title">My Web Design Work</h1>
                    <div class="card-deck">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={DreamCatcherIMG} height="250" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Dream Catcher Group Project</h5>
                                <p class="card-text">Full-stack PERN typescript web app with CRUD functions for both users and points of data. I worked as a member of a team to bring users what is essentially Twitter but for dreams.</p>
                                <a href="https://tjmm-dreamcatcher-client.herokuapp.com/" class="btn btn-link">Visit Site</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem"}}>
                            <img src={PKMNIMG} height="250" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Pokémon React App</h5>
                                <p class="card-text">Full-stack PERN web app with basic user creation and CRUD functions for points of data. App accesses the PokeAPI to fetch images of Pokémon for use with the app.</p>
                                <a href="https://tc-pokemon-client.herokuapp.com/" class="btn btn-link">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck" style={{marginTop: "60px"}}>
                        <div class="card" style={{width: "18rem"}}>
                            <img src={StaticLayoutIMG} height="250" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Static Layout</h5>
                                <p class="card-text">An attempt to accurately recreate an official website using only HTML and CSS.</p>
                                <a href="https://tim-culp.github.io/StaticLayout/" class="btn btn-link">Visit Site</a>
                            </div>
                        </div>
                        <div class="card" style={{width:"18rem"}}>
                            <img src={APIProjIMG} height="250" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mars API Project</h5>
                                <p class="card-text">A page that pulls images from NASA's Mars images API and displays them in a convenient list.</p>
                                <a href="https://pictures-of-mars.web.app/" class="btn btn-link">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck" style={{marginTop: "60px"}}>
                        <div class="card" style={{maxWidth: "30rem"}}>
                            <img src={BirthdayIMG} height="250" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Happy Birthday</h5>
                                <p class="card-text">A birthday page I made for a very close friend. It's full of memes and balloons.</p>
                                <a href="https://tim-culp.github.io/HappyBirthdayJames/" class="btn btn-link">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div id="about"></div>
                </Container>    
        </div>
    )
}

export default MyWork