import { FaGithub, FaLinkedin } from 'react-icons/fa';

// functionality for github and linkedin icons, directs to corresponding pages
const Footer = () => {
    const handleClickIcon = (icon) => {
        if (icon === 'github') {
            window.open('https://www.github.com/SAbramson16', '_blank');
        } else if (icon === 'linkedin') {
            window.open('https://www.linkedin.com/in/sharon-abramson-32125b283/', '_blank');
        }
    };

    return (
        <footer id="footer">
            <div >
                <div className="footer">
                    <FaGithub onClick={() => handleClickIcon('github')} className="icon"/>
                    <FaLinkedin onClick={() => handleClickIcon('linkedin')} className="icon"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;