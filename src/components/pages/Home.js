import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'reactstrap';
import "./Home.css";

let Home = () => {
    return(
        <div>
            <Row>
                <div id="Header"/>
                <Container>
                    <h1>Tim Culp <br/>
                    Full-Stack Web Developer</h1>
                    <h4>Competencies:</h4>
                    <ul>
                        <li>
                            <p>
                                HTML5
                            </p>
                        </li>
                        <li>
                            <p>
                                CSS
                            </p>
                        </li>
                        <li>
                            <p>
                                Javascript
                            </p>
                        </li>
                        <li>
                            <p>
                                React
                            </p>
                        </li>
                        <li>
                            <p>
                                Express
                            </p>
                        </li>
                        <li>
                            <p>
                                PostgreSQL
                            </p>
                        </li>
                    </ul>
                </Container>
            </Row>
        </div>
    )
}

export default Home;