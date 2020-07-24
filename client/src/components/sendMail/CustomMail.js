import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { customMailer } from "../../actions/forms";
import { connect } from "react-redux";

const CustomMail = ({ customMailer }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const objectData = {
      gmail: {
        email: formData.gmail !== "" ? formData.gmail : null,
        password: formData.password !== "" ? formData.password : null,
      },
      form: {
        email: formData.email !== "" ? formData.email : null,
        name: formData.name !== "" ? formData.name : null,
        surname: formData.surname !== "" ? formData.surname : null,
        subject: formData.subject !== "" ? formData.subject : null,
        content: formData.content !== "" ? formData.content : null,
      },
    };
    customMailer(objectData);
    setFormData({});
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="fullSide">
      <div className="main-container">
        <nav>
          <Link to="/home">
            <button>
              <i className="fas fa-arrow-circle-left"></i> Back
            </button>
          </Link>
        </nav>
        <section className="formTemplate">
          <article>
            <div className="headerText">
              <h1>Custom form</h1>
              <p>Send the message via your gmail account</p>
              <p>
                <strong>Your data will not be saved!</strong> <br />
                This is only form which using input elements to create message
                and is not saving any data.
              </p>
            </div>
            <form className="mainForm" onSubmit={formSubmit}>
              <h3>Gmail login section</h3>
              <div className="double-box">
                <div className="inline-box">
                  <label>Gmail Adress</label>
                  <input
                    type="email"
                    placeholder="Gmail"
                    name="gmail"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="inline-box">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Gmail password"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <h3>Full email content</h3>
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

CustomMail.propTypes = {
  customMailer: PropTypes.func.isRequired,
};

export default connect(null, { customMailer })(CustomMail);
