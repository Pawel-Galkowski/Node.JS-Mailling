import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="paper-background">
        <article>
          <h1>Mailling appilcation</h1>
          <p>
            Online application to send emails trought test email or via the
            private email.
          </p>
          <p>Application is basic and will be upgraded later.</p>
        </article>
        <nav>
          <ul>
            <li>
              <Link to="/standard-mailer">
                <button>Standard mailer</button>
              </Link>
            </li>
            <li>
              <Link to="/custom-mailer">
                <button>Custom mailer</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Landing;
