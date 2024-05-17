import React, { useEffect, useRef, useState } from "react";
import Intro from "../components/contact/Intro";
import Header from "../components/Header";
import { getContactData, getSiteData } from "./data";

const Contact = () => {
  const topContainer = useRef();
  const [contactMap, setContactMap] = useState();
  const [introHeading, setIntroHeading] = useState();
  const [introText, setIntroText] = useState();
  const [siteEmails, setSiteEmails] = useState();
  const [sitePhoneNumbers, setSitePhoneNumbers] = useState();
  const [siteSocials, setSiteSocials] = useState([]);
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
    getContactDatas();
  }, []);
  useEffect(() => {
    getSiteDatas();
  }, []);
  async function getContactDatas() {
    await getContactData()
      .then((res) => {
        console.log(res.contactdata);
        setContactMap(res.contactdata.contactMap);
        setIntroHeading(res.contactdata.introHeading);
        setIntroText(res.contactdata.introText);
        // contactMap
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  async function getSiteDatas() {
    await getSiteData()
      .then((res) => {
        console.log(res);
        setSiteEmails(res.siteEmails);
        setSitePhoneNumbers(res.sitePhoneNumbers);
        setSiteSocials(res.siteSocials);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }
  return (
    <>
      <div ref={topContainer} />
      <Header title={"Contact"} subtitle={"Get In Touch "} />

      <section className=" pagecontent">
        <Intro
          email={siteEmails}
          phone={sitePhoneNumbers}
          socials={siteSocials}
          map={contactMap}
          heading={introHeading}
          text={introText}
        />
      </section>
    </>
  );
};

export default Contact;
