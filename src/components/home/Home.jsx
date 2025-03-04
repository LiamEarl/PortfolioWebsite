import React, { useState } from "react"
import {motion} from "framer-motion"
import "./Home.css"
import profile_picture from "../../assets/profile_picture.jpg"
import hand from "../../assets/hand.png"

const Home = () => {

    const [waving, setWaving] = useState(false);

    return (
        <div className="home">
            <div className="home-images" onMouseEnter={() => setWaving(true)} onMouseLeave={() => setWaving(false)}>
                <motion.img
                    className="waving-hand"
                    src={hand}
                    alt="Waving Hand"
                    initial={{rotate: -30, y: 300, x: -30}}  
                    animate={waving ? {rotate: [-30,  -50  , 10,  -30, -30], 
                                       y:      [330,    0,    0,       330], 
                                       x:      [-30, -300, -180, -250, -30]
                                       } : {rotate:-30, y: 300, x: -30}}
                    transition={{repeat: Infinity, repeatType: "loop", duration: 2.5, ease: "easeInOut"}}
                    style={{width: "175px", opacity: (waving ? 100:0)}}
                />

                <img className ="portrait" src={profile_picture} alt=""/>
            </div>
            <div className="intro">
                <h1 
                onMouseEnter={() => setWaving(true)} onMouseLeave={() => setWaving(false)}>
                <span>Hey,</span> I'm Liam Earl.
                </h1>

                <p>A Java and React developer with a specialty in back-end solutions.</p>    
                <div className="home-buttons">
                    <button className="home-button-skills">What I Can Do</button>
                    <button className="home-button-resume">My Resume</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home