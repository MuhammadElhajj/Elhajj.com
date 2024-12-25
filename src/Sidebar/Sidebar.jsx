import './Sidebar.css'
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';
import { BsLinkedin } from "react-icons/bs";

function SideBar ({rightValue , closeSide}) {



    return <div className='Sidebar' style={{right : `${rightValue}vw`}}>
  
  <div className="Sidebar__Social__Media">
    <CgClose onClick={closeSide} className='Close__Sidebar__Icon'/>
    <h1 className='Sidebar__h2'>Social Media Links</h1>
          <a target="_blank" href="https://www.instagram.com/elhajj_coding" className="Sidebar__Social__Media__Link">
            <BsInstagram className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Instagram</span>
          </a>
          <a  target="_blank" href="https://www.linkedin.com/in/muhammad-elhajj-489580335"  className="Sidebar__Social__Media__Link">
            <BsLinkedin className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Linkedin</span>
          </a>
          <a target="_blank" href="https://github.com/MuhammadElhajj" className="Sidebar__Social__Media__Link">
            <BsGithub className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Github</span>
          </a>
          <a href="#G" className="Sidebar__Social__Media__Link">
            <BsDiscord className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Discord</span>
          </a>
        </div>

    </div>
}

export default SideBar