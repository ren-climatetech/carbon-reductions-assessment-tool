import React from "react";
import "./HomePage.scss";
import homepagecover from "../../assets/images/roadandtrees.jpg"


function HomePage() {
  return (
    <div className="homepage">
      
      <div className="homepage__section homepage__section-services">
      <img className="homepage__image" src={homepagecover} alt="background-cvoer-photo" />
      <div className="homepage__overlay"></div>
        <div className="homepage__container">
          <p className="homepage__title">Services</p>
        </div>
      </div>

      <section>
        
      </section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default HomePage;
