import React, { useEffect, useRef } from "react";
import Intro from "../components/contact/Intro";
import Header from "../components/Header";
const Contact = () => {
  const topContainer = useRef();
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
  return (
    <>
      <div ref={topContainer} />
      <Header title={"Contact"} subtitle={"Get In Touch "} />

      <section className=" pagecontent">
        <Intro />
      </section>
    </>
  );
};

export default Contact;
