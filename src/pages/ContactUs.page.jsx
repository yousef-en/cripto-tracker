import React from "react";
import contactImg from "../assets/image/contact.png";
const ContactUsPage = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 bg-primary rounded-3 p-3">
          <h3>Contact Us</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-7 mb-3">
            <h3>Contact Us</h3>
            <h5>test@test.com</h5>
            <h5>+91 9876543210</h5>

            <div>
              <div className="mb-3 ">
                <label for="exampleFormControlInput1" className="form-label">
                  your name
                </label>
                <input type="name" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary">send</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 text-center">
            <img
              src={contactImg}
              alt="about us"
              className="about-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
