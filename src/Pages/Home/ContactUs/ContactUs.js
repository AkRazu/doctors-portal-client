import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="lg: my-16">
      <div className="hero contact-bg">
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content py-16">
          <div className="max-w-md">
            <h4 className="text-secondary font-bold text-xl">Contact Us</h4>
            <h2 className="text-4xl text-white">Stay connected with us</h2>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input mt-10 input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input my-5 input-bordered w-full max-w-xs"
                />
                <textarea className="textarea mb-6 w-full max-w-xs textarea-bordered" placeholder="Your message"></textarea>
              </form>
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
