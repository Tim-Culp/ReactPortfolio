import React, { useState, useEffect } from 'react'
import { Container, Row } from 'reactstrap';
import LinkedINIMG from "./illustrations/linkedin.png";
import LogoIMG from './logo.png';
import GitHubIMG from './illustrations/github.png';

let ContactMe = () => {
    return(
        <div>
                <Row>
                <div id="Header"/>
                </Row>
            <Container>
                <h1 class="title">Find Me Here</h1>
                <div class="row">
                    <div class="col-md-4">
                        <a href="https://www.linkedin.com/in/tim-culp-204b031a5/">
                            <img src={LinkedINIMG} width="50%" style={{margin: "auto", display: "block"}} alt=""/>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <div style={{verticalAlign: "auto", position: "relative", top: "60px"}}>
                            <img src={LogoIMG} width="100px" style={{margin: "auto", marginBottom: "20px", display: "block"}} alt=""/>
                            {/*<!-- <p style="text-align:center; width: 100%; font-size: 20pt; margin-bottom: 10px; margin-top: 10px">Download My Resume</p> -->*/}
                            <a href="./TimCulp-Resume.doc" download style={{margin: "auto", textDecoration: "none"}}><button class="btn btn-link">Download My Resume</button></a>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <a href="https://github.com/Tim-Culp">
                            <img src={GitHubIMG} width="50%" style={{margin: "auto", display: "block"}} alt=""/>
                        </a>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md">
                        <a href="https://www.linkedin.com/in/tim-culp-204b031a5/" style={{textAlign: "center", display: "block", margin: "auto"}}>
                                LinkedIn
                        </a>
                    </div>
                    <div class="col-md">
                        
                    </div>
                    <div class="col-md">
                        <a href="https://www.linkedin.com/in/tim-culp-204b031a5/" style={{textAlign: "center", display: "block", margin: "auto"}}>
                            GitHub
                    </a>
                    </div>
                </div>

                <h1 class="title" style={{marginTop: "60px", marginBottom: "10px"}}>Drop Me a Line</h1>
                <div class="row">
                    <p style={{textAlign:"center", width:"100%"}}>Fill out this form and we can get in touch. I'm excited to work with you.</p>

                    <form action="https://formspree.io/mpzlbbwp" method="POST" style={{textAlign: "center", marginTop: "10px"}}>
                        <label style={{color: "white"}}>
                            Your email:
                            <input type="text" name="_replyto" class="form-control" style={{width:"750px", backgroundColor:"#191919", borderColor: "transparent", color:"#808080", fontSize:"24pt", height: "35px", padding: "4px"}}/>
                        </label>
                        <label style={{color: "white"}}>
                            Your message:<br/>
                            <textarea name="message" style={{width:"750px", backgroundColor:"#191919", borderColor: "transparent", color:"#808080", fontSize:"24pt", padding: "4px"}}></textarea>
                        </label> <br/>

                        <button type="submit" class="btn btn-link">Send</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default ContactMe;