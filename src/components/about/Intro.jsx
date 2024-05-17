import React from "react";
import { NavLink } from "react-router-dom";
import ulimage from "../../images/list_menu.svg";

const Intro = (props) => {
  console.log(props.values);
  return (
    <div className="row width-narrower pagemain">
      <div className="column xl-12">
        {/* <h2>
          Get <span style={{ color: "#E9903B" }}>To Know</span> Us
        </h2> */}

        <p>{props.welcometext}</p>
        <h2 className="u-add-bottom">Our Objectives</h2>
        <div className="s-expertise__content-main grid-section-split__primary">
          <div className="grid-list-items list-items show-ctr">
            {props.objectives?.map((objective) => {
              return (
                <div className="grid-list-items__item list-items__item">
                  <div className="grid-list-items__title list-items__item-header">
                    <h6 className="list-items__item-title">
                      {objective.title}
                    </h6>
                  </div>
                  <div className="grid-list-items__text list-items__item-text">
                    <p>{objective.content}</p>
                  </div>
                </div>
              );
            })}

            {/* list-item */}

            {/* list-expertise__item */}

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
        <p>{props.mission}</p>
        <h2>Our Vision</h2>
        <p>{props.vision}</p>
        <h2>Our Values</h2>
        <p>
          <ul className="career-list">
            {props.values?.map((value) => {
              return (
                <li>
                  <p>
                    <img src={ulimage} width={30} height={30} />
                    &nbsp; {value}
                  </p>
                </li>
              );
            })}
          </ul>
        </p>
      </div>
      {/* end grid-block*/}
    </div>
  );
};

export default Intro;
