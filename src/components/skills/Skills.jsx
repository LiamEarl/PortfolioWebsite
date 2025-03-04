import React from "react"
import my_skills_data from "../../assets/my_skills_data.js"
import {motion} from "framer-motion"
import "./Skills.css"

const getAnimation = (index, offset) => {
    const image_size = 200;
    const x_mult = 1.5;
    const originalx = [-image_size*x_mult, 0, image_size*x_mult, image_size*x_mult, 0, -image_size*x_mult];
    const originaly = [0,0,0,image_size,image_size,image_size];
    const outputx = [0,0,0,0,0,0,0];
    const outputy = [0,0,0,0,0,0,0];
    for (var i = 0; i < originalx.length + 1; i++) {
        const mapped_index = (i + index) % originalx.length;
        outputx[i] = originalx[mapped_index] + offset[0]; 
        outputy[i] = originaly[mapped_index] + offset[1]; 
    }
    return {
        x: outputx,
        y: outputy
    }
}

const getOriginal = (index, offset) => {
    const image_size = 200;
    const x_mult = 2;
    const originalx = [-image_size*x_mult, 0, image_size*x_mult, image_size*x_mult, 0, -image_size*x_mult];
    const originaly = [0,0,0,image_size,image_size,image_size];
    
    return {
        x: originalx[index] + offset[0],
        y: originaly[index] + offset[1]
    }
}

const Skills = () => {
    return (
        <div className="skills">
            <h1>I'm skilled in:</h1>
            <div className="skills-container">
                {my_skills_data.map((skill,index)=>{
                    return (
                        <div className="skill">
                            <motion.img 
                                src={skill.s_img} 
                                alt={skill.name}
                                initial={getOriginal(skill.s_no, [0,0])}  
                                animate={getAnimation(skill.s_no, [0,0])}
                                transition={{repeat: Infinity, duration: 15, ease: "linear"}}
                                style={{height:100, width:100, position: "absolute", alignContent:"center",display:"flex",justifyContent:"center"}}
                            /> 
                            <motion.p
                                initial={getOriginal(skill.s_no, [0,80])}  
                                animate={getAnimation(skill.s_no, [0,80])}
                                transition={{repeat: Infinity, duration: 15, ease: "linear"}}
                                style={{fontSize:20, position:"absolute", alignContent:"center", whiteSpace: "nowrap", zIndex:1}}>
                                    {skill.s_name}
                                </motion.p>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Skills