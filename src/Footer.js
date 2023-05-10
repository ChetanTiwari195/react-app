import './Styles/App.css';
import twitter from './assets/Twitter.png';
import facebook from "./assets/Facebook.png";
import instagram from "./assets/Instagram.png";
import github from "./assets/GitHub.png";

export default function Footer() {
    return(
        <div className='footer'>
            <img src = {twitter} alt ="twt" />
            <img src = {facebook} alt ="fb" />
            <img src = {instagram} alt ="instgrm" />
            <img src = {github} alt="gh"/>
        </div>
    )
}