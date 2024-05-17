import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "nuka-carousel";

function Intro(props) {
  return (
    <>
      {/* intro 002244 */}

      <section id="intro" style={{ background: "#002244" }} className="s-intro">
        <div className="row s-intro__content width-sixteen-col">
          <div className="column lg-12 s-intro__content-inner grid-block">
            <div className="s-intro__content-text">
              <div className="s-intro__content-pretitle text-pretitle">
                We're a
              </div>
              <h1 className="s-intro__content-title">{props.title}</h1>
            </div>
            <div className="owl-carousel s-intro__content-media">
              <Carousel
                autoplay={true}
                autoplayInterval={5000}
                dragging={true}
                wrapAround={true}
                
                renderBottomCenterControls={false}
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
              >
                {props.sliders.map((slide, index) => {
                  return (
                    <div className="s-intro__content-media-inner image-sliderfade fade">
                      <img src={slide} style={{ borderRadius: 10 }} />
                      <div className="lines">
                        <span />
                      </div>
                    </div>
                  );
                })}
              </Carousel>

              <div style={{ textAlign: "center" }}>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
            {/* s-intro__content-media */}
            <div className="s-intro__scroll-down">
              <a href="#about" className="smoothscroll">
                <div className="scroll-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={36}
                    height={36}
                    fill="none"
                    stroke="#97b34a"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    &lt;!--! Atomicons Free 1.00 by @atisalab License -
                    https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright
                    2021 Atomicons --&gt;
                    <polyline points="7 13 12 18 17 13" />
                    <line x1={12} y1={18} x2={12} y2={6} />
                  </svg>
                </div>
                <span>Scroll for more</span>
              </a>
            </div>
            {/* s-intro__scroll-down */}
          </div>
          {/* s-intro__content-inner */}
        </div>
        {/* s-intro__content */}
      </section>
      {/* end s-intro */}
    </>
  );
}

export default Intro;
