import React, { useEffect } from "react";
import investors_one from "../../images/invest/investors_one.jpg";
import investors_two from "../../images/invest/investors_two.jpg";
import investors_three from "../../images/invest/investors_three.jpg";
import investors_four from "../../images/invest/investors_four.jpg";
import investors_five from "../../images/invest/investors_five.jpg";
import investors_six from "../../images/invest/investors_six.jpg";

import AOS from "aos";
function Intro() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="row pageintro">
        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12 u-flexitem-x-right"
        >
          <h2>Industry Analysis</h2>
          <p>
            Millions of individuals rely on reliable NEMT services to access
            healthcare. However, the current industry often suffers from
            inefficiency, inconsistency, and poor customer service. NNAYDE
            addresses this problem by offering: Reliable and timely
            transportation: We utilize a state-of-the-art dispatch system and
            GPS tracking to ensure clients reach their appointments on schedule.
            Compassionate and professional drivers: Our drivers are trained to
            provide exceptional care and assistance to all clients, regardless
            of their needs. Flexible and diverse transportation options: We
            offer a fleet of clean and well-maintained vehicles, including vans
            and sedans, to cater to individual preferences and accessibility
            requirements. Technology-driven solutions: We leverage technology to
            streamline operations, optimize routes, and improve communication
            with clients.
          </p>
        </div>
        <div
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12"
        >
          <img src={investors_one} style={{ borderRadius: 10 }} />
        </div>
      </div>

      {/* <div className="row pageintro">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12 u-flexitem-x-right"
        >
          <h2>Target Market </h2>
          <p>
            NNAYDE's primary target market includes: Individuals with medical
            needs: This includes individuals with limited mobility,
            disabilities, and chronic illnesses requiring medical needs.
            Healthcare providers and insurance companies: We partner with
            healthcare providers to offer transportation solutions for their
            patients and with insurance companies to ensure seamless billing and
            coverage. Senior care facilities: We provide reliable transportation
            for residents needing medical appointments and other essential
            services.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12"
        >
          <img src={investors_two} style={{ borderRadius: 10 }} />
        </div>
      </div> */}

      <div className="row pageintro">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12"
        >
          <img src={investors_three} style={{ borderRadius: 10 }} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12 u-flexitem-x-right"
        >
          <h2>Competitive Advantage </h2>
          <p>
            NNAYDE differentiates itself from competitors through: Unwavering
            focus on customer service: We prioritize client satisfaction by
            providing personalized attention and exceeding expectations.
            Technology-driven approach: We leverage technology to improve
            efficiency, optimize operations, and enhance communication with
            clients. Commitment to safety and compliance: We adhere to the
            highest safety standards and comply with all regulatory
            requirements. Experienced and dedicated team: We are led by a team
            of passionate individuals with extensive experience in the NEMT
            industry.
          </p>
        </div>
      </div>
      {/* 
      <div className="row pageintro">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12 u-flexitem-x-right"
        >
          <h2>Marketing Strategy </h2>
          <p>
            NNAYDE will implement a comprehensive marketing strategy to reach
            its target audience, including: Digital marketing: We will leverage
            online advertising, social media marketing, and search engine
            optimization to increase brand awareness and generate leads.
            Partnerships: We will build strategic partnerships with healthcare
            providers, insurance companies, and senior care facilities.
            Community engagement: We will participate in relevant industry
            events and trade shows to build relationships and foster trust.
            Word-of-mouth marketing: We will encourage existing clients to share
            their positive experiences with others. Promotions: We will offer
            promotional packages and discounts for regular customers and our
            partners.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12"
        >
          <img src={investors_four} style={{ borderRadius: 10 }} />
        </div>
      </div> */}

      {/* <div className="row pageintro">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12"
        >
          <img src={investors_five} style={{ borderRadius: 10 }} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="column xl-6 lg-12 u-flexitem-x-right"
        >
          <h2>Sales Forecast </h2>
          <p>
            With our current reputation and social capital, we believe we can
            have 5 drivers to start within the first three months which we
            intend to consistently increase in multiples of 5 over the next
            year. This is a 33% increase monthly. We believe that by the ninth
            month, we can break-even and begin to record profits. By the end of
            the first year, we believe we will make significant profits to
            please our shareholders and partners.
          </p>
        </div>
      </div> */}

      {/* <div className="row pageintro">
        <div className="column xl-6 lg-12 u-flexitem-x-right">
          <h2>Break-Even Analysis </h2>
          <p>
            If our services are second to none and we can break even as earlier
            mentioned in 9 months at $30 per head in a day for a trip and a
            total of $90,000 in a month. In the first quarter if our prices are
            between $32 and $35. We believe investors will be proud of watching
            their investment grow and give them desired results.
          </p>
        </div>
        <div className="column xl-6 lg-12">
          <img src={investors_six} style={{ borderRadius: 10 }} />
        </div>
      </div> */}
    </>
  );
}

export default Intro;
