import React, { useEffect, useRef, useState } from "react";
import Intro from "../components/home/Intro";
import Aboutsection from "../components/home/Aboutsection";
import Expertisesection from "../components/home/Expertisesection";
import Cta from "../components/home/Cta";
import Blogsection from "../components/home/Blogsection";
import { getHomeData } from "./data/index";
function Home() {
  const topContainer = useRef();
  const [heroTitle, setHeroTitle] = useState("");
  const [heroImages, setHeroImages] = useState([]);
  const [aboutusTitle, setAboutusTitle] = useState("");
  const [aboutUsImages, setAboutUsImages] = useState([]);
  const [aboutUsDescription, setAboutUsDescription] = useState("");
  const [expertiseData, setExpertiseData] = useState([]);
  const [expertiseDesOne, setExpertiseDesOne] = useState("");
  const [expertiseDesTwo, setExpertiseDesTwo] = useState("");
  const [expertiseTitle, setExpertiseTitle] = useState("");
  const [callToActionTitle, setCallToActionTitle] = useState("");
  const [callToActionDescription, setCallToActionDescription] = useState("");
  const [callToActionButtonText, setCallToActionButtonText] = useState("");
  const [recentArticlesTitle, setRecentArticlesTitle] = useState("");
  const [recentArticlesDescription, setRecentArticlesDescription] = useState(
    ""
  );
  const [
    recentArticlesCallToActionTitle,
    setRecentArticlesCallToActionTitle,
  ] = useState("");
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
    getHomeDatas();
  }, []);
  async function getHomeDatas() {
    await getHomeData()
      .then((res) => {
        console.log(res.homedata);
        setHeroTitle(res.homedata.heroTitle);
        setAboutusTitle(res.homedata.aboutusTitle);
        setAboutUsImages(res.homedata.aboutUsImages);
        setHeroImages(res.homedata.heroImages);
        setAboutUsDescription(res.homedata.aboutUsDescription);
        setExpertiseData(res.homedata.expertiseItems);
        setExpertiseTitle(res.homedata.expertiseTitle);
        setExpertiseDesOne(res.homedata.expertiseDescriptionOne);
        setExpertiseDesTwo(res.homedata.expertiseDescriptionTwo);
        setCallToActionTitle(res.homedata.callToActionTitle);
        setCallToActionDescription(res.homedata.callToActionDescription);
        setCallToActionButtonText(res.homedata.callToActionButtonText);
        setRecentArticlesTitle(res.homedata.recentArticlesTitle);
        setRecentArticlesDescription(res.homedata.recentArticlesDescription);
        setRecentArticlesCallToActionTitle(
          res.homedata.recentArticlesCallToActionTitle
        );
        // recentArticlesTitle
        // recentArticlesDescription
        // recentArticlesCallToActionTitle
        //         callToActionTitle
        // callToActionDescription
        // callToActionButtonText
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  return (
    <section id="content" className="s-content">
      <div ref={topContainer} />
      <Intro title={heroTitle} sliders={heroImages} />
      <Aboutsection
        title={aboutusTitle}
        description={aboutUsDescription}
        images={aboutUsImages}
      />
      <Expertisesection
        data={expertiseData}
        title={expertiseTitle}
        descOne={expertiseDesOne}
        descTwo={expertiseDesTwo}
      />
      <Cta
        title={callToActionTitle}
        description={callToActionDescription}
        btntext={callToActionButtonText}
      />
      <Blogsection
        title={recentArticlesTitle}
        btntext={recentArticlesCallToActionTitle}
        description={recentArticlesDescription}
      />
    </section>
  );
}

export default Home;
