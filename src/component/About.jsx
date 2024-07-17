import "./About.css";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const About = ({setPlaystate}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt=""  className="about-img"/>
            <img src={play_icon} alt=""  className="play-icon" onClick={()=>{
              setPlaystate(true);
            }}/>
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Nursing is a profession characterized by compassion</h2>
           <p>Nursing is a profession characterized by compassion, skill, and dedication to patient care. Nurses play a crucial role in healthcare settings, providing not only medical expertise but also emotional support to patients and their families. </p>
           <p>They are often at the frontline, administering treatments, monitoring conditions, and advocating for the well-being of those in their care.</p>
           <p>Beyond clinical duties, nurses educate patients on managing their health and collaborate closely with doctors and other healthcare professionals to ensure comprehensive care. Their unwavering commitment makes them indispensable in promoting health and healing in communities worldwide.</p>

        </div>
    </div>
  )
}

export default About