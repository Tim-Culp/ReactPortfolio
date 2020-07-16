import React, { useState, useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import MinecraftIMG from "./illustrations/minecraft.png";
import HTML5IMG from "./illustrations/html5.png";
import MetroidPythonIMG from "./illustrations/metroidpython.png";
import UnrealBlenderIMG from "./illustrations/unrealblender.png";
import MetroidUnityIMG from "./illustrations/metroidunity.png";
import "./MyJourney.css";



let MyJourney = () => {
    return (
        <div>
            <Row>
            <div id="Header"/>
            </Row>
            <Container>
                <h1 class="title">My Journey</h1>
                <div class="row">
                    <div class="col-md">
                        <img src={MinecraftIMG} alt=""/>
                    </div>
                    <div class="col-sm-8">
                        <p class="writing">As a developer, I got my start in Minecraft of all things. The game's robust JSON-esque command system hooked my young mind and before I knew it, I was manipulating the game in ways I didn't know were possible.</p>
                    </div>
                </div>
                <div class="row" style={{marginTop: "60px"}}>
                    <div class="col-sm-8">
                        <p class="writing">Meanwhile, I was taking an in-depth HTML, CSS, and JavaScript introduction class in high school. In that class, I learned from <span style={{fontStyle:"italic"}}>HTML5 Game Development for Dummies</span>, a comprehensive book by IUPUI professor Andy Harris. It came with his easy-to-understand JavaScript game engine (simpleGame.js), which I started using to experiment with game creation and further my understanding of JavaScript.</p>
                    </div>
                    <div class="col-md">
                        <img src={HTML5IMG} alt=""/>
                    </div>
                </div>
                <div class="row" style={{marginTop: "60px"}}>
                    <div class="col-md">
                        <img src={MetroidPythonIMG} alt=""/>
                    </div>
                    <div class="col-sm-8">
                        <p class="writing"> Come my second high-school year, I started work on an ambitious Minecraft recreation of the 2002 game Metroid Prime. Work was slow, but then again, there was no pressure to release the project. With my sophomore high-school year came another programming class, including an introduction to Python. By the end of the year, I was making a Megaman-style platformer in Python's Pygame engine.</p>
                    </div>
                </div>
                <div class="row" style={{marginTop: "60px"}}>
                    <div class="col-sm-8">
                        <p class="writing">During Junior Year I made some short horror stories for Minecraft and continued to iterate on my Metroid recreation project. The programming class began to shift toward 3D game engines, and I learned the basics of Unreal Engine 4 and Blender. I finished out the year having made an ambient environment to explore in Unreal.</p>
                    </div>
                    <div class="col-md">
                        <img src={UnrealBlenderIMG} alt=""/>
                    </div>
                </div>
                <div class="row" style={{marginTop: "60px"}}>
                    <div class="col-md">
                        <img src={MetroidUnityIMG} alt=""/>
                    </div>
                    <div class="col-sm-8">
                        <p class="writing">
                            After high school I was determined to finish my Metroid project, so I spent a few weeks plugging away at it. In the end, I was proud of my work, but I was ready for more. Immediately afterward, I began to learn and experiment with the Unity engine including C# scripting. I made a short horror game to stretch my abilities, and then started work on a meme-themed first-person shooter, which is currently still in development.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default MyJourney;