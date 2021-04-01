import { FaEthereum, FaHtml5, FaCss3Alt, FaReact, FaPython, FaAngular } from "react-icons/fa";
import { SiJavascript, SiJquery, SiRedux, SiNodeDotJs,  SiPostgresql } from "react-icons/si";
import RND from './img/RND.jpg';
import FEND from './img/FEND.jpg';
import IPND from './img/IPND.jpg';
import sololearnHTML from './img/sololearnHTML.jpg';
import sololearnCSS from './img/sololearnCSS.jpg';
import sololearnJS from './img/sololearnJS.jpg';
import sololearnJQ from './img/sololearnJQ.jpg';
import sololearnSQL from './img/sololearnSQL.jpg';
import sololearnReact from './img/sololearnReact.jpg';
import hackerrankReact from './img/hackerrankReact.jpg';

export const skills = [
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

export const certificates = {
    nanodegree: [
        {id: 3, name: 'React', img: RND, date: 'June, 2020', link: 'https://confirm.udacity.com/DUKMWR2D', syllabus: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/syllabus/syllabus-nd019-default-en-us.pdf'},
        {id: 2, name: 'Front End Developer', img: FEND, date: 'January 2020', link: 'https://confirm.udacity.com/QPPLCMPJ', syllabus:'https://s3-us-west-2.amazonaws.com/udacity-printer/production/syllabus/syllabus-nd0011-default-en-us.pdf'},
        {id: 1, name: 'Intro to Programming', img: IPND, date: 'June 2018', link: 'https://confirm.udacity.com/GZ5FS7AC', syllabus: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/syllabus/syllabus-nd000-4.0.0-en-us.pdf'},
    ],
    certificates: [
        {id: 7, name: 'React (Basic)', img: hackerrankReact, date: 'February 2021', link: 'https://www.hackerrank.com/certificates/0c2b99ba15e8'},
        {id: 6, name: 'React + Redux course', img: sololearnReact, date: 'July 2020', link: 'https://www.sololearn.com/Certificate/1097-26490/jpg/'},
        {id: 5, name: 'SQL course', img: sololearnSQL, date: 'January, 2021', link: 'https://www.sololearn.com/Certificate/1060-26490/jpg/'},
        {id: 4, name: 'jQuery course', img: sololearnJQ, date: 'December 2017', link:'https://www.sololearn.com/Certificate/1082-26490/jpg/'},
        {id: 3, name: 'JavaScript course', img: sololearnJS, date: 'June 2020', link: 'https://www.sololearn.com/Certificate/1024-26490/jpg/'},
        {id: 2, name: 'CSS course', img: sololearnCSS, date: 'September 2017', link: 'https://www.sololearn.com/Certificate/1023-26490/jpg/'},
        {id: 1, name: 'HTML course', img: sololearnHTML, date: 'September 2017', link: 'https://www.sololearn.com/Certificate/1014-26490/jpg/'},

    ]
}
