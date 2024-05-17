import React from "react";
const Blogsection = (props) => {
  return (
    <section id="journal" className="s-journal">
      <div className="row s-journal__content width-sixteen-col">
        <div className="column xl-12 grid-block">
          <div className="grid-full section-header text-center">
            <div className="text-pretitle">Recent Articles</div>
            <h2 className="text-display-title">{props.title}</h2>
            <p>{props.description}</p>

            <h3>{props.btntext}</h3>
          </div>{" "}
          {/* end section-header */}
          <div
            style={{ display: "none" }}
            className="grid-full s-journal__content-main grid-list-items"
          >
            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <a href="blog.html">SEO</a>
                </div>
                <h3 className="blog-card__title">
                  <a href="single.html">
                    7 SEO Factors to Consider for Better Website Ranking
                  </a>
                </h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Quibusdam quis autem voluptatibus earum vel ex error ea magni.
                  Rerum quam quos. Aut asperiores sit mollitia. Rem neque et
                  voluptatem eos quia sed eligendi et. Eaque velit eligendi ut
                  magnam. Cumque ducimus laborum doloribus facere maxime vel
                  earum quidem enim suscipit.
                </p>
              </div>
            </div>{" "}
            {/* end blog card */}
            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <a href="blog.html">Productivity</a>
                </div>
                <h3 className="blog-card__title">
                  <a href="single.html">5 Effective Web Design Principles</a>
                </h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus
                  ullam esse sapiente fugiat, rerum labore cupiditate obcaecati
                  dolore necessitatibus id magni rem officia dolor nam sit
                  laudantium. Quo eaque eveniet quibusdam unde.
                </p>
              </div>
            </div>{" "}
            {/* end blog-card */}
          </div>
        </div>{" "}
        {/* end grid-block*/}
      </div>{" "}
      {/* end s-journal__content */}
    </section>
  );
};

export default Blogsection;
