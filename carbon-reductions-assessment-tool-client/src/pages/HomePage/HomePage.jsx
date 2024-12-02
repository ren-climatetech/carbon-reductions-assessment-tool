import React from "react";
import "./HomePage.scss";
import Services from "../../components/Services/Services";
import homepagecover from "../../assets/images/roadandtrees.jpg";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__section homepage__section-services">
        <img
          className="homepage__image"
          src={homepagecover}
          alt="background-cover-photo"
        />
        <div className="homepage__overlay"></div>
        <div className="homepage__container">
          <h1 className="homepage__title">Services</h1>
        </div>
      </div>

      <section>
        <Services />
      </section>
      <footer></footer>
    </div>
  );
}

export default HomePage;
