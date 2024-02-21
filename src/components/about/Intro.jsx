import React from "react";
import { NavLink } from "react-router-dom";
import ulimage from "../../images/list_menu.svg";

const Intro = () => {
  return (
    <div className="row width-narrower pagemain">
      <div className="column xl-12">
        {/* <h2>
          Get <span style={{ color: "#E9903B" }}>To Know</span> Us
        </h2> */}

        <p>
          We are committed to prioritizing client satisfaction by providing
          reliable, safe, and efficient non-emergency medical transportation
          services. We aim to ensure accessible and comfortable transportation
          for patients and individuals with medical needs. Our focus on customer
          satisfaction drives us to deliver the best possible transportation
          experience. We aim to eliminate any obstacles that prevent people in
          need of medical services from accessing healthcare. We achieve this by
          our team of experts working diligently to establish a professional
          relationship with each patient.
        </p>
        <h2 className="u-add-bottom">Our Objectives</h2>
        <div className="s-expertise__content-main grid-section-split__primary">
          <div className="grid-list-items list-items show-ctr">
            <div className="grid-list-items__item list-items__item">
              <div className="grid-list-items__title list-items__item-header">
                <h6 className="list-items__item-title">
                  Safety Of Our Passengers
                </h6>
              </div>
              <div className="grid-list-items__text list-items__item-text">
                <p>
                  To ensure the safety of our passengers, our drivers are
                  professionally trained and thoroughly background-checked to
                  ensure safety and comfort before they are employed. We also
                  operate a fleet of brand-new compliant vehicles.
                </p>
              </div>
            </div>
            {/* list-item */}
            <div className="grid-list-items__item list-items__item">
              <div className="grid-list-items__title list-items__item-header">
                <h6 className="list-items__item-title">Accountability</h6>
              </div>
              <div className="grid-list-items__text list-items__item-text">
                <p>
                  In addition to transportation, we make sure that every
                  passenger is safe and accounted for at drop-off by making sure
                  they sign for each completed ride. We also have our staff
                  members sign our log sheet so we have accurate records of when
                  passengers are picked up and dropped off.
                </p>
              </div>
            </div>
            {/* list-expertise__item */}
            <div className="grid-list-items__item list-items__item">
              <div className="grid-list-items__title list-items__item-header">
                <h6 className="list-items__item-title">
                  Efficiency And Effectiveness
                </h6>
              </div>
              <div className="grid-list-items__text list-items__item-text">
                <p>
                  Here at Nnayde, we ensure our clients are contacted a day
                  prior to their appointment and also picked up at least an hour
                  before their appointments. Moreso we pride ourselves in
                  ensuring that members are not left stranded after an
                  appointment by making sure they are picked up on time.
                </p>
              </div>
            </div>
            <div className="grid-list-items__item list-items__item">
              <div className="grid-list-items__title list-items__item-header">
                <h6 className="list-items__item-title">
                  Continuous Improvement Through Feedback
                </h6>
              </div>
              <div className="grid-list-items__text list-items__item-text">
                <p>
                  We understand that the NEMT landscape is ever-evolving. To
                  stay at the forefront, our primary objective includes actively
                  seeking feedback from patients, and members of our team. This
                  commitment to continuous improvement ensures that our services
                  align with the dynamic needs of the non-emergency medical
                  transportation industry.
                </p>
                <NavLink to="/contact" className="btn btn--primary">
                  Leave us a message
                </NavLink>
              </div>
            </div>
            {/* list-expertise__item */}
          </div>
          {/* grid-list-items */}
        </div>
        <h2>Our Mission</h2>
        <p>
          To enhance the quality of life for individuals with medical
          requirements by delivering compassionate, reliable and well-equipped
          transportation services, ensuring timely and safe journeys to and from
          healthcare facilities.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our goal is to become the leading NEMT service provider in Texas and
          beyond.
        </p>
        <h2>Our Values</h2>
        <p>
          <ul className="career-list">
            <li>
              <p>
                <img src={ulimage} width={30} height={30} />
                &nbsp; Respect and dignity
              </p>
            </li>
            <li>
              <p>
                <img src={ulimage} width={30} height={30} />
                &nbsp; Commitment to providing quality and smooth transportation
                services
              </p>
            </li>
            <li>
              <p>
                <img src={ulimage} width={30} height={30} />
                &nbsp; Compassionate and professional service
              </p>
            </li>
          </ul>
        </p>
      </div>
      {/* end grid-block*/}
    </div>
  );
};

export default Intro;
