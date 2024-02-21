import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Intro from "../components/investors/Intro";
const Investors = () => {
  const topContainer = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
  return (
    <>
      <Header title={"Investors"} subtitle={"Investors Overview"} />
      <div ref={topContainer} />
      <section className="s-pagecontent pagecontent">
        <Intro />
      </section>
    </>
  );
};

export default Investors;
