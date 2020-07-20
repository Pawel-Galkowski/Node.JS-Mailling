import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { standardMailer } from "../../actions/forms";
import { connect } from "react-redux";

const StandardMail = ({ standardMailer }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    standardMailer(formData);
  };

  return (
    <div className="fullSide">
      <div className="main-container">
        <nav>
          <Link to="/home">
            <button><i className="fas fa-arrow-circle-left"></i> Back</button>
          </Link>
        </nav>
        <section className="formTemplate">
          <article>
            <div className="headerText">
              <h1>Standard form</h1>
              <p>Basic of standard form for website</p>
            </div>
            <form className="mainForm" onSubmit={formSubmit}>
              <label>E-mail Adress</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
              />
              <div className="double-box">
                <div className="inline-box">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="inline-box">
                  <label>Surname</label>
                  <input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <label>Subject</label>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={onChange}
                required
              />
              <label>Content</label>
              <textarea
                placeholder="Write content of message..."
                name="content"
                rows="5"
                onChange={onChange}
                required
              />
              <input type="submit" value="Send" />
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

StandardMail.propTypes = {
  standardMailer: PropTypes.func.isRequired,
};

export default connect(null, { standardMailer })(StandardMail);
