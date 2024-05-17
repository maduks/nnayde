import React, { useEffect, useState } from "react";
import Intro from "../components/careers/Intro";
import { getCareersData } from "./data";
const Careers = () => {
  const [careersOverviewImages, setCareersOverviewImages] = useState([]);
  const [careersTags, setCareersTags] = useState([]);
  const [careersTitle, setCareersTitle] = useState();
  const [careersText, setCareersText] = useState();
  const [careersOverviewText, setCareersOverviewText] = useState();
  const [careersCulture, setCareersCulture] = useState();
  useEffect(() => {
    getCareersDatas();
  }, []);
  async function getCareersDatas() {
    await getCareersData()
      .then((res) => {
        console.log(res.careerdata.careersTitle);
        setCareersOverviewImages(res.careerdata.careersOverviewImages);
        setCareersTags(res.careerdata.careersTags);
        setCareersTitle(res.careerdata.careersTitle);
        setCareersText(res.careerdata.careersText);
        setCareersOverviewText(res.careerdata.careersOverviewText);
        setCareersCulture(res.careerdata.careersCulture);
        console.log(res.careerdata.careersTitle)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Intro
        images={careersOverviewImages}
        culture={careersCulture}
        overview={careersOverviewText}
        text={careersText}
        title={careersTitle}
        tags={careersTags}
      />
    </>
  );
};

export default Careers;
