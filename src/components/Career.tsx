import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B1 Trainee</h4>
                <h5>NIVT, NASTP Alpha</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aircraft Maintenance Engineering Trainee focusing on B1 modules. Specializing in the mechanical precision of aviation platforms while analyzing defense strategies, geopolitics, and modern warfare mechanics.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security & Intelligence Analyst</h4>
                <h5>Freelance / Independent</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Operating across the full intelligence spectrum utilizing OSINT, SOCMINT, HUMINT, and SIGINT methodologies. Focused on mapping digital footprints, gathering actionable intelligence, and analyzing global geopolitical trends.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Offensive Security Specialist</h4>
                <h5>Independent</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Specializing in advanced penetration testing, red teaming, and bug bounty hunting. Actively exploiting web protocols, exposing vulnerabilities, and proactively securing complex digital infrastructures.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & Automation</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Building pragmatic digital solutions. Developing custom environment optimization tools, automated cleanup scripts, and utilizing specialized tools for system debloating and efficiency.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;