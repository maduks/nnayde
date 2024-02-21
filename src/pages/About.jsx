import React, { useEffect, useRef } from "react";
import Intro from "../components/about/Intro";
import Header from "../components/Header";
function About() {
  const topContainer = useRef();
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
  return (
    <>
      <div ref={topContainer} />
      <Header title={"About"} subtitle={"Hi, We're Nnayde"} />

      <section className="s-pagecontent pagecontent">
        <Intro />
      </section>
    </>
  );
}

export default About;
