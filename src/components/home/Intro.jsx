import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "nuka-carousel";

function Intro() {
  const sliderImages = {
    slider_one:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/11_rghOY2ekP.png?updatedAt=1705579125324",
    slider_two:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/13_zrYNyT_5R.png?updatedAt=1705579177652",
    slider_three:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/5_vfdX14IlM.png?updatedAt=1705579177505",
    slider_four:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/8_Yn-Plf4kd.png?updatedAt=1705579244649",
    slider_five:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/14_yd_keWb1v.png?updatedAt=1705579245086",
    slider_six:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/10_pKLpdSghv.png?updatedAt=1705579244678",
    slider_seven:
      "https://ik.imagekit.io/paysupport/nnayde/sliders/2_DLM_GGdHM.png?updatedAt=1705579244691",
  };
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
              <h1 className="s-intro__content-title">
                Non Emergency <br />
                Medical Transportation <br />
                Service For Patients <br />
              </h1>
            </div>
            <div className="owl-carousel s-intro__content-media">
              <Carousel
                autoplay={true}
                renderBottomCenterControls={false}
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
              >
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_one}
                    style={{ borderRadius: 10 }}
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_two}
                    style={{ borderRadius: 10 }}
                    alt="slider"
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_three}
                    style={{ borderRadius: 10 }}
                    alt="slider"
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_four}
                    style={{ borderRadius: 10 }}
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_five}
                    style={{ borderRadius: 10 }}
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>

                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_six}
                    style={{ borderRadius: 10 }}
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
                <div className="s-intro__content-media-inner image-sliderfade fade">
                  {/* srcset="images/bg_car.png 1x, images/bg_car.png 2x" */}
                  <img
                    src={sliderImages.slider_seven}
                    style={{ borderRadius: 10 }}
                  />
                  <div className="lines">
                    <span />
                  </div>
                </div>
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
