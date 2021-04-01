import { FaEthereum, FaHtml5, FaCss3Alt, FaReact, FaPython, FaAngular } from "react-icons/fa";
import { SiJavascript, SiJquery, SiRedux, SiNodeDotJs,  SiPostgresql } from "react-icons/si";

const skills = [
    {name: 'HTML', icon: FaHtml5, progress: 95},
    {name: 'CSS', icon: FaCss3Alt, progress: 95},
    {name:'Javascript', icon: SiJavascript, progress: 90},
    {name: 'jQuery', icon: SiJquery, progress: 60},
    {name: 'NodeJs', icon: SiNodeDotJs, progress: 60},
    {name: 'React', icon: FaReact, color: '61dafb', progress: 80},
    {name: 'Redux', icon: SiRedux, progress: 70},
    {name: 'Postgres', icon: SiPostgresql, progress: 40},
    {name: 'Angular', icon: FaAngular, progress: 50},
    {name: 'Solidity', icon: FaEthereum, progress: 35},
    {name: 'Python', icon: FaPython, progress: 20}
]

export default skills;