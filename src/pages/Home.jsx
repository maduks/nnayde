import React, { useEffect, useRef } from "react";
import Intro from "../components/home/Intro";
import Aboutsection from "../components/home/Aboutsection";
import Expertisesection from "../components/home/Expertisesection";
import Cta from "../components/home/Cta";
import Blogsection from "../components/home/Blogsection";
function Home() {
  const topContainer = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <section id="content" className="s-content">
      <div ref={topContainer} />
      <Intro />
      <Aboutsection />
      <Expertisesection />
      <Cta />
      <Blogsection/>
    </section>
  );
}

export default Home;
