/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import AOS from "aos";
import dentalAppointment from "../../images/dental_nnyade_medicare.jpeg";
import "aos/dist/aos.css";
function Expertisesection() {
  const images = {
    rehab:
      "https://ik.imagekit.io/paysupport/nnayde/rehabilitation_nnayde_medicare_transport_loPA1eNDq2.jpeg?updatedAt=1705575988884",
    hospitalDischarge:
      "https://ik.imagekit.io/paysupport/nnayde/hospital_discharge_M6wHplTLB.jpeg?updatedAt=1705578375661",
    adultCare:
      "https://ik.imagekit.io/paysupport/nnayde/adultcare_6SfG_aZiS.jpeg?updatedAt=1705578436076",
    medicalCare:
      "https://ik.imagekit.io/paysupport/nnayde/medicalcheck_7H6lRaT9l.jpeg?updatedAt=1705578515967",
    pharmacyService:
      "https://ik.imagekit.io/paysupport/nnayde/pharmacy_-N5if01pR.jpeg?updatedAt=1705578559920",
    dentalAppointment:
      "https://ik.imagekit.io/paysupport/nnayde/dental_nnyade_medicare_kXFHbkPRm.jpeg?updatedAt=1705578637191",
    insuranceVisit:
      "https://ik.imagekit.io/paysupport/nnayde/insurance_visit_nnayde_medicare_HYyBItPEKm.jpeg?updatedAt=1705578721682",
  };
  const rehabImg = "";
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="expertise" className="s-expertise">
      <div className="row s-expertise__content width-sixteen-col">
        <div className="column xl-12 grid-block grid-section-split">
          <div
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="section-header grid-section-split__header"
          >
            <div className="text-pretitle">How we deliver</div>
            <h2 className="text-display-title">Our key areas of expertise.</h2>
            <p className="lead">
              Nnayde offers upscale medical transportation services to meet the
              diverse needs of our clients. Our services includes
              <span style={{ color: "#EB9740", fontWeight: "bold" }}>
                &nbsp; WHEELCHAIR
              </span>
              -friendly and
              <span style={{ color: "#EB9740", fontWeight: "bold" }}>
                &nbsp; AMBULATORY &nbsp;
              </span>
              transportation to and from any medical appointment, including:
            </p>

            {/* images here */}

            <div className="row boxes">
              <div style={{ padding: 0 }} className=" tilt column xl-5 box_exp">
                <img
                  style={{
                    position: "relative",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,

                    left: 0,
                    width: "100%",
                  }}
                  src={images.hospitalDischarge}
                />
                <div style={{ padding: 10 }}>
                  <h5
                    className="text-"
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                    }}
                  >
                    Hospital Discharge
                  </h5>
                  {/* <p style={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error,
                      </p> */}
                </div>
              </div>
              <div style={{ padding: 0 }} className="column xl-5 box_exp">
                <img
                  style={{
                    position: "relative",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    left: 0,
                    width: "100%",
                  }}
                  src={images.adultCare}
                />
                <div style={{ padding: 10 }}>
                  <h5
                    className=""
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                      color: "#EB9740",
                    }}
                  >
                    Adult Daycare Centre
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                  </p>
                </div>
              </div>
            </div>

            <div className="row boxes">
              <div style={{ padding: 0 }} className="column xl-5 box_exp">
                <img
                  style={{
                    position: "relative",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,

                    left: 0,
                    width: "100%",
                  }}
                  src={images.medicalCare}
                />
                <div style={{ padding: 10 }}>
                  <h5
                    className=""
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                      color: "#EB9740",
                    }}
                  >
                    Dialysis Centre
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                  </p>
                </div>
              </div>
              <div style={{ padding: 0 }} className="column xl-5 box_exp tilt">
                <img
                  style={{
                    position: "relative",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    left: 0,
                    width: "100%",
                  }}
                  src={images.pharmacyService}
                />
                <div style={{ padding: 10 }}>
                  <h5
                    className=""
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                    }}
                  >
                    Pharmacy Pick Up
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end section-header */}
          <div
            data-aos="slide-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="s-expertise__content-main grid-section-split__primary"
          >
            <div className="grid-list-items list-items show-ctr">
              {/* list-item */}
              <div className="grid-list-items__item list-items__item">
                <p>
                  Our services are not limited to medical transportation needs,
                  we also provide everyday errands, store visits, family events,
                  laboratory equipment pick up and laboratory test and result
                  pick-up.{" "}
                </p>

                <div className="row boxes">
                  <div style={{ padding: 0 }} className="column xl-5 box_exp">
                    <img
                      style={{
                        position: "relative",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,

                        left: 0,
                        width: "100%",
                      }}
                      src={dentalAppointment}
                    />
                    <div style={{ padding: 10 }}>
                      <h5
                        className=""
                        style={{
                          marginTop: -35,
                          textAlign: "center",
                          color: "#EB9740",
                        }}
                      >
                        Dental Appointment
                      </h5>
                      <p style={{ textAlign: "center" }}>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ padding: 0 }}
                    className="column xl-5 box_exp tilt"
                  >
                    <img
                      style={{
                        position: "relative",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        left: 0,
                        width: "100%",
                      }}
                      src={images.insuranceVisit}
                    />
                    <div style={{ padding: 10 }}>
                      <h5
                        className=""
                        style={{
                          marginTop: -35,
                          textAlign: "center",
                        }}
                      >
                        Insurance Company Visit
                      </h5>
                      <p style={{ textAlign: "center" }}>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{ padding: 0 }}
                    className="column xl-5 box_exp tilt"
                  >
                    <img
                      style={{
                        position: "relative",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        left: 0,
                        width: "100%",
                      }}
                      src={images.rehab}
                    />
                    <div style={{ padding: 10 }}>
                      <h5
                        className=""
                        style={{
                          marginTop: -35,
                          textAlign: "center",
                        }}
                      >
                        Rehabilitation Centre
                      </h5>
                      <p style={{ textAlign: "center" }}>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="grid-list-items__title ">
                  <h3 className="list-items__item-title">WheelChair Service</h3>
                </div>
                <div className="grid-list-items__text list-items__item-text">
                  <img
                    src={wheelchairService}
                    style={{
                      width: "70%",
                      borderRadius: 7,
                      boxShadow: "5px 7px 0.5rem rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div> */}
              </div>

              {/* list-expertise__item */}
            </div>
            {/* grid-list-items */}
          </div>
        </div>
        {/* end grid-block*/}
      </div>
    </section>
  );
}

export default Expertisesection;
