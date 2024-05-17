/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import AOS from "aos";
import dentalAppointment from "../../images/dental_nnyade_medicare.jpeg";
import "aos/dist/aos.css";
function Expertisesection(props) {
  const rehabImg = "";
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  //const isCapitalizedWord = (word) => /^[A-Z]+[^\w]*$/.test(word);
  const containsCapital = str => /[A-Z]/.test(str);

  const isCapitalizedWord = (word) => /^[A-Z.-]+$/.test(word);
  //const isCapitalizedWord = (word) => /^[A-Z]+[^A-Za-z0-9\s]*$/.test(word);
  console.log(props);
  // const renderText = () => {
  //   let text = props.descOne;
  //   const words = text.split("");
  //   return (
  //     <span>
  //       {words.map((word, index) =>
  //         isCapitalizedWord(word) ? (
  //           <span style={{ color: "#EB9740", fontWeight: "bold" }} key={index}>
  //             {word}{" "}
  //           </span>
  //         ) : (
  //           word + " "
  //         )
  //       )}
  //     </span>
  //   );
  // };
  // Render text with <strong> tag if it contains capital letters
  const renderText = () => {
    let text = props.descOne;
    if (containsCapital(text)) {
      return (
        <span>
          {text.split("").map((char, index) =>
            char === char.toUpperCase() ? (
              <span
                key={index}
                style={{ color: "#EB9740", fontWeight: "bold" }}
              >
                {char}
              </span>
            ) : (
              char
            )
          )}
        </span>
      );
    } else {
      return text;
    }
  };

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
            <h2 className="text-display-title">{props.title}.</h2>
            <p>{renderText()}</p>

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
                  src={props.data[3]?.image}
                />

                <div style={{ padding: 10 }}>
                  <h5
                    className="text-"
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                    }}
                  >
                    {props.data[3]?.title}
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
                  src={props.data[4]?.image}
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
                    {props.data[4]?.title}
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
                  src={props.data[5]?.image}
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
                    {props.data[5]?.title}
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
                  src={props.data[6]?.image}
                />
                <div style={{ padding: 10 }}>
                  <h5
                    className=""
                    style={{
                      marginTop: -35,
                      textAlign: "center",
                    }}
                  >
                    {props.data[6]?.title}
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
                <p>{props.descTwo} </p>

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
                      src={props.data[0]?.image}
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
                        {props.data[0]?.title}
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
                      src={props.data[1]?.image}
                    />
                    <div style={{ padding: 10 }}>
                      <h5
                        className=""
                        style={{
                          marginTop: -35,
                          textAlign: "center",
                        }}
                      >
                        {props.data[1]?.title}
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
                      src={props.data[2]?.image}
                    />
                    <div style={{ padding: 10 }}>
                      <h5
                        className=""
                        style={{
                          marginTop: -35,
                          textAlign: "center",
                        }}
                      >
                        {props.data[2]?.title}
                      </h5>
                      <p style={{ textAlign: "center" }}>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores illum error, */}
                      </p>
                    </div>
                  </div>
                </div>
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
