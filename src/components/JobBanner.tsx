import React from "react";

const JobBanner: React.FC = () => {
  return (
    <div className="job-banner">
      <div className="job-banner-header">
        <div className="job-banner-status">
          <span className="status-text">AVAILABLE TO HIRE IMMEDIATELY</span>
        </div>
        <div className="job-banner-badges">
          <span className="badge">🌍 Ready to Relocate</span>
          <span className="badge">💻 Remote Work Ready</span>
        </div>
        <div className="job-banner-icon">💼</div>
      </div>

      <div className="job-banner-body">
        <p className="job-banner-description">
          Have a project or role that fits my skills? I'm open to new challenges. Let's connect!
        </p>
      </div>

      <div className="job-banner-footer">
        <div className="contact-section">
          <div className="contact-methods">
            <a
              href="mailto:nuwansalawatta@gmail.com"
              className="contact-method"
            >
              <span className="contact-icon">📧</span>
              <span className="contact-text">nuwansalawatta@gmail.com</span>
            </a>
            <a href="tel:+94757871494" className="contact-method">
              <span className="contact-icon">📱</span>
              <span className="contact-text">+94 757871494</span>
              <span className="contact-hint">(WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
