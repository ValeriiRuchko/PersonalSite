// &copy; <--- it's copyright symbol

// icons
// icons
import gitHubLogo from "/github.svg";
import linkedInLogo from "/linkedin.svg";
import twitterLogo from "/twitter.svg";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_content_copyright">
          <p>&copy; 2023, Valerii Ruchko</p>
          <p>
            Content of this website is licensed via{" "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">
              CC BY-NC
            </a>
          </p>
        </div>
        <div className="footer_content_socials">
          <div className="footer_content_socials_items">
            <a href="https://twitter.com/_PlantDev">Twitter </a>{" "}
            <img src={twitterLogo} />
          </div>
          <div>
            <a href="https://github.com/ValeriiRuchko">GitHub </a>{" "}
            <img src={gitHubLogo} />
          </div>
          <div className="footer_content_socials_items">
            <a href="https://www.linkedin.com/in/valerii-ruchko/">LinkedIn </a>{" "}
            <img src={linkedInLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
