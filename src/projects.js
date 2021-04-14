import starnotary from './img/starnotary.jpg';
import pixelartmaker from './img/pixelartmaker.jpg';
import memorygame from './img/memorygame.jpg';
import arcadegame from './img/arcadegame.jpg';
import landingpage from './img/landingpage.jpg';
import myreads from './img/myreads.jpg';
import wouldyourather from './img/wouldyourather.jpg';
import travelplaner from './img/travelplaner.jpg';
import supplytrackingdapp from './img/supplytrackingdapp.jpg';
import paragoria from "./img/paragoria.jpg";
import { FaEthereum, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiMocha, SiBootstrap, SiJavascript, SiJquery, SiRedux, SiNodeDotJs, SiWebpack, SiHeroku, SiJest, SiPostgresql } from "react-icons/si";

const projects = [
    {   id: 26,
        name: 'Fair Trade Coffee',
        screenshot: supplytrackingdapp,
        techUsed: [
            { name: 'Solidity', icon: FaEthereum },
            { name: 'MochaJs', icon: SiMocha },
            { name: 'Javascript', icon: SiJavascript},
            { name: 'jQuery', icon: SiJquery },
            { name: 'CSS', icon: FaCss3Alt}
        ],
        date: 'April 2021',
        linkUrl: 'https://jakapresecnik.github.io/dapp-for-tracking-items-through-supply-chain/',
        linkGithub: 'https://github.com/JakaPresecnik/dapp-for-tracking-items-through-supply-chain/'
    },
    {   id: 25,
        name: 'Decentralized Star Notary Service',
        screenshot: starnotary,
        techUsed: [
            { name: 'Solidity', icon: FaEthereum },
            { name: 'MochaJs', icon: SiMocha },
            { name: 'HTML', icon: FaHtml5 },
            { name: 'Javascript', icon: SiJavascript},
            { name: 'Bootstap', icon: SiBootstrap}
        ],
        date: 'March 2021',
        linkUrl: 'https://jakapresecnik.github.io/Decentralized-Star-Notary-Service/',
        linkGithub: 'https://github.com/JakaPresecnik/Decentralized-Star-Notary-Service'
    },
    {
        id: 21,
        name: 'Paragoria Website',
        screenshot: paragoria,
        techUsed: [
            { name:'PostgreSQL', icon: SiPostgresql },
            { name: 'React', icon: FaReact },
            { name: 'Redux', icon: SiRedux },
            { name: 'Node.js', icon: SiNodeDotJs },
            { name: 'CSS', icon: FaCss3Alt },
            { name: 'Heroku', icon: SiHeroku }
        ],
        date: 'June 2020',
        linkUrl: 'http://www.paragoriaband.com/',
        linkGithub: 'https://github.com/JakaPresecnik/paragoria'

    },
    {
        id: 19,
        name: 'Would You Rather',
        screenshot: wouldyourather,
        techUsed: [
            { name: 'React', icon: FaReact },
            { name: 'Redux', icon: SiRedux },
            { name: 'CSS', icon: FaCss3Alt}
        ],
        date: 'April 2020',
        linkUrl: 'https://jakapresecnik.github.io/would-you-rather/',
        linkGithub: 'https://github.com/JakaPresecnik/would-you-rather'
    },
    {
        id: 18,
        name: 'My Reads',
        screenshot: myreads,
        techUsed: [
            { name: 'React', icon: FaReact },
            { name: 'CSS', icon: FaCss3Alt}
        ],
        date: 'March 2020',
        linkUrl: 'https://jakapresecnik.github.io/my-reads/',
        linkGithub: 'https://github.com/JakaPresecnik/my-reads'
    },
    {
        id: 17,
        name: 'Travel Planer',
        screenshot: travelplaner,
        techUsed: [
            {name: 'HTML', icon: FaHtml5},
            {name:'SCSS', icon: FaCss3Alt},
            {name: 'Javascript', icon: SiJavascript},
            {name: 'Node.js', icon: SiNodeDotJs},
            {name: 'Webpack', icon: SiWebpack},
            {name: 'Jest', icon: SiJest},
            {name: 'Heroku', icon: SiHeroku}
        ],
        date: 'January 2020',
        linkUrl: 'https://jaka-travel-app.herokuapp.com/',
        linkGithub: 'https://github.com/JakaPresecnik/travel_planner'
    },
    {
        id: 14,
        name: 'Landing Page',
        screenshot: landingpage,
        techUsed: [
            { name: 'Javascript', icon: SiJavascript },
            { name: 'HTML', icon: FaHtml5 },
            { name: 'CSS', icon: FaCss3Alt}
        ],
        date: 'November 2019',
        linkUrl: 'https://jakapresecnik.github.io/landing_page/',
        linkGithub: 'https://github.com/JakaPresecnik/landing_page'
    },
    {
        id: 7,
        name: 'Arcade Game',
        screenshot: arcadegame,
        techUsed: [
            { name: 'Javascript', icon: SiJavascript },
        ],
        date: 'June 2018',
        linkUrl: 'https://jakapresecnik.github.io/Udacity_FEND_arcade_game/',
        linkGithub: 'https://github.com/JakaPresecnik/Udacity_FEND_arcade_game'
    },
    {
        id: 6,
        name: 'Memory Game',
        screenshot: memorygame,
        techUsed: [
            { name: 'Javascript', icon: SiJavascript },
            { name: 'jQuery', icon: SiJquery },
            { name: 'HTML', icon: FaHtml5 },
            { name: 'CSS', icon: FaCss3Alt}
        ],
        date: 'June 2018',
        linkUrl: 'https://jakapresecnik.github.io/memory_game/',
        linkGithub: 'https://github.com/JakaPresecnik/memory_game'
    },
    {
        id: 2,
        name: 'Pixel Art Maker',
        screenshot: pixelartmaker,
        techUsed: [
            { name: 'Javascript', icon: SiJavascript },
            { name: 'HTML', icon: FaHtml5 },
        ],
        date: 'November 2017',
        linkUrl: 'https://jakapresecnik.github.io/Udacity_FEND_Pixel-Art-Maker/',
        linkGithub: 'https://github.com/JakaPresecnik/Udacity_FEND_Pixel-Art-Maker'
    }
]

export default projects;