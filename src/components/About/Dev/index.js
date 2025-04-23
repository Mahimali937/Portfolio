import "./index.scss"; 
import AnimatedLetters from "../../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faHtml5, faAmazon, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import DevList from "../DevList";

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                    Hey, I'm Mahim, a junior majoring in Computer Science with a minor in Mathematics. As an ambitious software developer, my diverse background has equipped me with a strong foundation in technical skills and problem-solving. I thrive in collaborative environments, where I leverage my effective communication skills and analytical mindset to address challenges and contribute to successful team projects. Whether it’s developing innovative solutions or tackling complex problems, I am dedicated to applying my knowledge and enthusiasm to drive impactful results.
                    <br/>
                    <DevList />
                    <Link to="/about" className="flat-button">LANGUAGES</Link>
                    <br/>
                    <Link to="/about/tech" className="flat-button">FRAMEWORKS/TECHNOLOGIES</Link>
                    </p>
                </div>
                <div className = "stage-cube-cont">
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faAmazon}/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About