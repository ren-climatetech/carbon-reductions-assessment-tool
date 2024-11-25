import "./Services.scss";
import carbon from "../../assets/images/carbonassessment.jpg"
import cdp from "../../assets/images/cdpsupport.jpg"
import credits from "../../assets/images/renewableenergy.jpg"

function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <img className="services__image" src={carbon} />
        <div className="services__container-text">
        <h2 className="services__title">GHG Assessments </h2>
        <p className="services__description">Understanding your organization's carbon emissions is the first step toward meaningful reduction. Our carbon accounting services provide a comprehensive analysis of your greenhouse gas emissions across all operations. We empower you to make informed decisions and set achievable reduction targets.</p>
        </div>
      </div>
      <div className="services__container">
        <img className="services__image" src={cdp}/>
        <div className="services__container-text">
        <h2 className="services__title">CDP Reporting Support</h2>
        <p className="services__description">The Carbon Disclosure Project (CDP) is a global disclosure system that enables companies to measure and manage their environmental impacts. We provide expert support to help you navigate the CDP assessment process; from preparation and strategy to data collection and analytics and reporting and submission. </p>
      </div>
      </div>
      <div className="services__container">
        <img className="services__image" src={credits}/>
        <div className="services__container-text">
        <h2 className="services__title">RECs and Carbon Credits </h2>
        <p className="services__description">While reducing emissions is crucial, some carbon output may be unavoidable. Our carbon credit purchasing service allows you to offset these emissions by investing in certified environmental projects. Not only do you neutralize your remaining emissions but also support projects that make a positive difference in the world.</p>
      </div>
      </div>
    </div>
  );
}

export default Services;
