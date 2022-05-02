import React from "react";
import CardsCss from "./Cards.css";

const styling = {
  divCardBody: {
    padding: "4rem",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    marginBottom: "2rem",
    color: "hsl(0, 0%, 100%)",
  },
  subCardTitle: {
    color: "hsla(0, 0%, 100%, 0.75)",
  },
  cardText: {
    color: "hsla(0, 0%, 100%, 0.6)",
  },
  spanCardTitle: {
    color: "hsl(277, 64%, 61%)",
  },
  subViewTextHeader: {
    color: "hsl(0, 0%, 100%)",
  },
  subViewText: {
    color: "hsla(0, 0%, 100%, 0.6)",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "8px 8px",
    filter:
      "invert(15%) sepia(15%) saturate(6139%) hue-rotate(240deg) brightness(65%) contrast(90%)",
  },
};

function CardComponent() {
  return (
    <div className="card allcard">
      <div class="row">
        <div className="col-6">
          <div className="card-body" style={styling.divCardBody}>
            <h2 className="card-title" style={styling.cardTitle}>
              Get{" "}
              <span className="span-text" style={styling.spanCardTitle}>
                insights
              </span>{" "}
              that help <br />
              your business grow.
            </h2>

            <p className="card-text mb-5" style={styling.cardText}>
              Discover the benefits of data analytics and make <br />
              better decisions regarding revenue, customer <br />
              experience, and overall efficiency.
            </p>

            <div
              className="card-title d-flex justify-content-between"
              style={styling.subCardTitle}
            >
              <div className="sub-view" style={styling.subViewText}>
                <p className="sub-text">
                  <h3 style={styling.subViewTextHeader}>10k+</h3>
                  COMPANIES
                </p>
              </div>
              <div className="sub-view" style={styling.subViewText}>
                <p className="sub-text">
                  <h3 style={styling.subViewTextHeader}>314</h3>
                  TEMPLATES
                </p>
              </div>
              <div className="sub-view" style={styling.subViewText}>
                <p className="sub-text">
                  <h3 style={styling.subViewTextHeader}>12M+</h3>
                  QUERIES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img
            src="image-header-desktop.jpg"
            className="img-fluid rounded-start"
            alt="image-header-desktop"
            style={styling.img}
          />
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
