import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  Mail,
  Menu,
  Send,
  X,
  Sun,
  Moon,
} from "lucide-react";
import {
  SiDotnet,
  SiReact,
  SiAngular,
} from "@icons-pack/react-simple-icons";
import "./App.css";
const navigation = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Projects",
  "Experience",
  "Contact",
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const scrollToSection = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };
  return (
    <div className={`portfolio theme-${theme}`}>
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-logo">LV</span>
          <span className="brand-text">
            <strong>Lender Villareal</strong>
            <small>.NET Developer</small>
          </span>
        </a>
        <button
          className="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.map((item) => (
            <button
              key={item}
              className={item === "Home" ? "nav-link active" : "nav-link"}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={() =>
            setTheme((current) => (current === "dark" ? "light" : "dark"))
          }
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>

        <a
          className="button button-primary resume-button"
          href="/Lender_Villareal_Resume.pdf"
          download="Lender_Villareal_Resume.pdf"
        >
          <Download size={18} />
          Download Resume
        </a>
      </header>
      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" />
              .NET DEVELOPER
            </span>
            <h1>
              Hi, I'm <span className="gradient-text">Lender</span>
            </h1>
            <h2>
              I build scalable web applications with{" "}
              <span className="accent-text">.NET</span> and modern frontend
              technologies.
            </h2>
            <p className="hero-description">
              Software developer with 6+ years of experience building
              enterprise applications using C#, ASP.NET Core, Angular,
              React, and SQL.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollToSection("Projects")}
              >
                <Code2 size={19} />
                View My Projects
                <ArrowRight size={18} />
              </button>
              <button
                className="button button-outline"
                onClick={() => scrollToSection("Contact")}
              >
                <Send size={17} />
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span style={{ fontSize: 18, fontWeight: 700 }}>in</span>
              </a>
              <span className="social-caption">
                Building reliable software, one feature at a time.
              </span>
            </div>
          </div>
          <div className="hero-visual character-stage">
            <div className="character-glow" />

            {/* Retro pixel technology speech bubbles */}
            <div className="floating-tech floating-tech-csharp">
              <img
                className="tech-logo"
                src="/images/csharp.svg"
                alt=""
                aria-hidden="true"
              />
              <span>C#</span>
            </div>

            <div className="floating-tech floating-tech-dotnet">
              <SiDotnet
                className="tech-logo"
                aria-hidden="true"
              />
            </div>

            <div className="floating-tech floating-tech-react">
              <SiReact className="tech-logo" aria-hidden="true" />
              <span>React</span>
            </div>

            <div className="floating-tech floating-tech-angular">
              <SiAngular className="tech-logo" aria-hidden="true" />
              <span>Angular</span>
            </div>

            <div className="floating-tech floating-tech-sql">
              <img
                className="tech-logo"
                src="/images/sql.svg"
                alt=""
                aria-hidden="true"
              />
              <span>SQL</span>
            </div>
            <button
              className="character-interactive"
              type="button"
              aria-label="Say hello to Lender"
              onClick={(event) =>
                event.currentTarget.classList.toggle("is-waving")
              }
              onMouseLeave={(event) =>
                event.currentTarget.classList.remove("is-waving")
              }
            >
              <img
                className="character-pose character-idle"
                src="/lender-idle.png"
                alt="Lender's big-head developer caricature standing in a semi-formal outfit"
              />
              <img
                className="character-pose character-wave"
                src="/lender-wave.png"
                alt=""
                aria-hidden="true"
              />
              <span className="hello-bubble">Hello World! 👋</span>
            </button>
          </div>
          <button
            className="scroll-indicator"
            onClick={() => scrollToSection("About")}
          >
            <ArrowDown size={16} />
            Scroll to explore
          </button>
        </section>
        <section className="stats section-container">
          <div className="stat-item">
            <BriefcaseBusiness className="stat-icon" size={27} />
            <div>
              <strong>6+</strong>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="stat-item">
            <Code2 className="stat-icon" size={27} />
            <div>
              <strong>.NET</strong>
              <span>Backend Development</span>
            </div>
          </div>
          <div className="stat-item">
            <Mail className="stat-icon" size={27} />
            <div>
              <strong>Full-Stack</strong>
              <span>Frontend & Backend</span>
            </div>
          </div>
        </section>
        <section className="placeholder-section section-container" id="about">
          <span className="section-kicker">01 — ABOUT</span>
          <h2>More than just code.</h2>
          <p>
            I enjoy solving real-world problems and building reliable
            applications that are useful, maintainable, and easy to use.
          </p>
          <span className="coming-next">About Me section — next step</span>
        </section>
        <section className="placeholder-section section-container" id="skills">
          <span className="section-kicker">02 — SKILLS</span>
          <h2>Technologies I work with.</h2>
          <p>C# · ASP.NET Core · Angular · React · SQL · Docker · Git</p>
          <span className="coming-next">Interactive skills section — next step</span>
        </section>
        <section className="placeholder-section section-container" id="services">
          <span className="section-kicker">03 — SERVICES</span>
          <h2>How I can contribute.</h2>
          <p>Web applications, REST APIs, database development, and deployment.</p>
          <span className="coming-next">Service cards — next step</span>
        </section>
        <section className="placeholder-section section-container" id="projects">
          <span className="section-kicker">04 — PROJECTS</span>
          <h2>Selected work.</h2>
          <p>Employee Service Management and Clinic Operating System.</p>
          <span className="coming-next">Project showcase — next step</span>
        </section>
        <section
          className="placeholder-section section-container"
          id="experience"
        >
          <span className="section-kicker">05 — EXPERIENCE</span>
          <h2>My professional journey.</h2>
          <p>Professional experience, responsibilities, and achievements.</p>
          <span className="coming-next">Experience timeline — next step</span>
        </section>
        <section className="contact-section section-container" id="contact">
          <span className="section-kicker">06 — CONTACT</span>
          <h2>Let's build something great.</h2>
          <p>
            Interested in working together? I'd be happy to discuss your
            project or an opportunity.
          </p>
          <a className="button button-primary" href="mailto:">
            <Mail size={18} />
            Email Me
          </a>
          <span className="coming-next">
            We'll add your real contact details later.
          </span>
        </section>
      </main>
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-logo">LV</span>
          <span className="brand-text">
            <strong>Lender Villareal</strong>
            <small>.NET Developer</small>
          </span>
        </a>
        <p>Designed and built with React, TypeScript, and curiosity.</p>
        <span>© {new Date().getFullYear()} Lender Villareal</span>
      </footer>
    </div>
  );
}
export default App;
