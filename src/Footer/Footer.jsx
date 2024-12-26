import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


function Footer () {
    return <div className="Footer">
     <div className="Footer__name">Created By <span>Muhammad ELhajj</span> in 2024 / CopyRight</div>
    <div  className="Footer__Social__Media__Links">
         <a target="_blank" href="https://www.instagram.com/elhajj_coding" className="Footer__Social__Media__Link">
                    <BsInstagram className="Footer__Social__Media__Link__Icon" />
                    
                  </a>
                  <a  target="_blank" href="https://www.linkedin.com/in/muhammad-elhajj-489580335"  className="Footer__Social__Media__Link">
                    <BsLinkedin className="Footer__Social__Media__Link__Icon" />
                   
                  </a>
                  <a target="_blank" href="https://github.com/MuhammadElhajj" className="Footer__Social__Media__Link">
                    <BsGithub className="Footer__Social__Media__Link__Icon" />
                  </a>
                 
    </div>
    </div>
}


export default Footer