import starnotary from './img/starnotary.jpg';
import pixelartmaker from './img/pixelartmaker.jpg';
import memorygame from './img/memorygame.jpg';
import arcadegame from './img/arcadegame.jpg';
import landingpage from './img/landingpage.jpg';
import myreads from './img/myreads.jpg';
import wouldyourather from './img/wouldyourather.jpg';
import { FaEthereum, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiMocha, SiBootstrap, SiJavascript, SiJquery, SiRedux } from "react-icons/si";

const projects = [
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