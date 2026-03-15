import { HeroWipe } from '../components/WipeReveal';
import { SocialLinks } from "../components/SocialLinks";
import resumePDF from "../data/Maksym_Fedorenko_CV.pdf";

const Header = () => {
  return (
    <header className="site-header">
      <SocialLinks animDelay={0.2} />
      <HeroWipe delay={0.5}>
        <button
          className="outline-btn"
          onClick={() => window.open(resumePDF, "_blank")}
        >
          My resume
        </button>
      </HeroWipe>
    </header>
  );
}

export default Header;