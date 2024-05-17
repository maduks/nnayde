import React, { useEffect, useRef, useState } from "react";
import Intro from "../components/about/Intro";
import Header from "../components/Header";
import { getAboutData } from "./data";
function About() {
  const [welcomeText, setWelcomeText] = useState();
  const [pageTitle, setPageTitle] = useState();
  const [values, setValues] = useState();
  const [mission, setMission] = useState();
  const [vision, setVision] = useState();
  const [objectives, setObjectives] = useState([]);
  const topContainer = useRef();
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  useEffect(() => {
    getAboutDatas();
  }, []);
  async function getAboutDatas() {
    await getAboutData()
      .then((res) => {
        console.log(res.aboutdata);
        setWelcomeText(res.aboutdata.welcomeText);
        setPageTitle(res.aboutdata.pageTitle);
        setValues(res.aboutdata.values);
        setMission(res.aboutdata.mission);
        setVision(res.aboutdata.vision);
        setObjectives(res.aboutdata.objectives);
        console.log(res.aboutdata.objectives);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }
  return (
    <>
      <div ref={topContainer} />
      <Header title={"About"} subtitle={pageTitle} />

      <section className="s-pagecontent pagecontent">
        <Intro
          welcometext={welcomeText}
          objectives={objectives}
          vision={vision}
          mission={mission}
          values={values}
        />
      </section>
    </>
  );
}

export default About;
