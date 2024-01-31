import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const handleClickIcon = (icon) => {
        if (icon === 'github') {
            window.open('insert github link', '_blank');
        } else if (icon === 'linkedin') {
            window.open('insert linkedin link', '_blank');
        }
    };

    return (
        <footer className="footer">
            <div>
                <div>
                    <FaGithub onClick={() => handleClickIcon('github')} className="icon"/>
                    <FaLinkedin onClick={() => handleClickIcon('linkedin')} className="icon"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;