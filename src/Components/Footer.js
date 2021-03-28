import { FaFacebookF, FaLinkedinIn, FaGithubAlt} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Footer() {
    return (
        <footer>
           <div className="footer">
                <h4>
                    <a className="badge" href="https://www.facebook.com/profile.php?id=100008377458956" title="Facebook profile" target="_blank" rel="noreferrer" ><FaFacebookF size='1.3em' /></a>
                    <a className="badge" href="https://www.linkedin.com/in/jakapresecnik/" title="Linkedin profile" target="_blank" rel="noreferrer" ><FaLinkedinIn size='1.3em' /></a>
                    <a className="badge" href="https://github.com/JakaPresecnik" title="Github profile" target="_blank" rel="noreferrer" ><FaGithubAlt size='1.3em' /></a>
                    <a className="badge" href="https://www.upwork.com/o/profiles/users/~0162426b4d1a3baf3c/" title="Upwork profile" target="_blank" rel="noreferrer" ><SiUpwork size='1.3em' /></a>
                </h4>
            </div> 
           <div className="footer"><p>© Copyright 2021 Jaka Presečnik</p></div>
        </footer>
    )
}

export default Footer;