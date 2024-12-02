import React from "react";
import "./ContactPage.scss";
import contactpagecover from "../../assets/images/contactus.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";


function ContactPage() {
  return (
    <div className="contactpage">
      <div className="contactpage__section homepage__section-services">
        <img
          className="contactpage__image"
          src={contactpagecover}
          alt="background-cover-photo"
        />
        <div className="contactpage__overlay"></div>
        <div className="contactpage__container">
          <h1 className="contactpage__title">How Can we Help?</h1>
          <h2>Send us a message!</h2>
        </div>
      </div>
      <section>
        <ContactUs />
      </section>
     
      <footer></footer>
    </div>
  );
}

export default ContactPage;
