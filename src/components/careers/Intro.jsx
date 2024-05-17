import React, { useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import position from "../../images/jobposition.svg";
import location from "../../images/location.svg";
import drivers from "../../images/driver_nnyade_medicare.jpeg";
import drivers_ from "../../images/1.png";
import drivers_two from "../../images/driver_two_nnayde.jpeg";
import drivers_three from "../../images/drivers_three_nnayde.jpeg";
import LabelInput from "../forms/LabelInput";
import TextLabel from "../forms/TextLabel";
import { useDropzone } from "react-dropzone";
const Intro = (props) => {
  console.log(JSON.stringify(props));
  const images = {
    drivers_one:
      "https://ik.imagekit.io/paysupport/nnayde/careers/driver_nnyade_medicare_2WJG3tMK6.jpeg?updatedAt=1705579677528",
    drivers_two:
      "https://ik.imagekit.io/paysupport/nnayde/careers/1_m8ibdCZdJ.png?updatedAt=1705579909995",
    drivers_three:
      "https://ik.imagekit.io/paysupport/nnayde/careers/driver_two_nnayde_c0QFhiJpP.jpeg?updatedAt=1705579948296",
    drivers_four:
      "https://ik.imagekit.io/paysupport/nnayde/careers/drivers_three_nnayde_b03oXWm9F.jpeg?updatedAt=1705579921773",
  };
  const ulStyles = {
    listStyleImage: "url(../../images/list_menu.svg)",
  };
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({ onDrop });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      // ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <>
      <section
        style={{
          backgroundColor: "#002244",
          backgroundImage:
            "url(data:image/png;base64,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)",
        }}
        className=""
      >
        <div className="row">
          <div className="column xl-6 md-12">
            <h1 className="page-title" style={{ color: "#fff" }}>
              {props.title}
            
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="column xl-8 md-12"
            style={{ color: "#fff", paddingTop: 30, paddingBottom: 30 }}
          >
            <span style={{ color: "" }}>
              {props.text}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="column xl-4 " style={{ paddingBottom: 30 }}>
            <NavLink
              to="/about"
              className="btn btn--primary s-header__contact-btn"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
        {

        }
        <div className="row">
          <div className="column xl-4 md-12">
            <p>
              <img height={34} width={34} src={position} />{" "}
              <b style={{ color: "#fff" }}>{props.tags[0]}</b>
            </p>
          </div>
        </div>

        <div className="row" style={{ position: "relative", bottom: 20 }}>
          <div className="column xl-4 md-12">
            <p>
              <img height={34} width={34} src={location} />{" "}
              <b style={{ color: "#fff" }}>{props.tags[1]} </b>
            </p>
          </div>
        </div>
      </section>
      <section className="pagemain">
        <div className="gridimages row  pagemain">
          {
            props.images?.map((images) => {
              return (
                <img
                  src={images}
                />
              );
            })
          }
      
        </div>
      </section>
      <section className="pagemain" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="column  xl-12 md-12">
            <h2>Overview</h2>
            <p>
              {props.overview}
           
            </p>
          </div>

          <div className="column  xl-12 md-12">
            <h2>Our Culture</h2>
            <p>
              {props.culture}
           
            </p>
          </div>
        </div>
      </section>

      <section className="pagemain" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="column  xl-12 md-12">
            <h2 style={{ textAlign: "center" }}>
              Please Fill The Form Below To Join Our Team
            </h2>
          </div>
        </div>
        <div className="row width-narrower">
          <div className="column  xl-6 md-12">
            <LabelInput
              type="text"
              placeholder="Enter first name"
              title={"First Name"}
            />
          </div>
          <div className="column  xl-6 md-12">
            <LabelInput
              type="text"
              placeholder="Enter last name"
              title={"Last Name"}
            />
          </div>
        </div>
        <div className="row width-narrower">
          <div className="column  xl-6 md-12">
            <LabelInput type="text" placeholder="Enter phone" title={"Phone"} />
          </div>
          <div className="column xl-6 md-12">
            <LabelInput
              type="email"
              placeholder="Enter email address"
              title={"Email"}
            />
          </div>
        </div>

        <div className="row width-narrower">
          <div className="column  xl-12 md-12">
            <TextLabel placeholder="Enter address" title={"Address"} />
          </div>
        </div>
        <div className="row width-narrower">
          <div className="column  xl-12 md-12">
            <label style={{ display: "", flexDirection: "row" }}>
              Upload file <span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="column xl-12 md-12">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Drop files here to upload
                  <br />{" "}
                  <span style={{ fontSize: 14, fontWeight: "lighter" }}>
                    or choose from your device
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }} className="row width-narrower">
          <div className="column xl-4">
            <NavLink to="/contact" className="btn btn--primary">
              Submit application
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
