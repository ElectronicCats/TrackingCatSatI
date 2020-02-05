import React, { Component, Fragment } from "react";

import CountentWrapper from "./CountentWrapper";

import Section from "./Navbar/NewSection";
class Countent extends Component {
  render() {
    return (
      <main className="cd-main-content">
        <nav className="cd-side-nav">
          <Section
            nameCategory="Main"
            id=""
            //icon={} future icon
            name="GPS"
            subSections={[
              {
                name: "Altura",
                tagColor: "rgba(234,45,255)",
                value: "43243"
              },
              {
                name: "Altura atm",
                tagColor: "rgba(24,222,255)",
                value: "432432"
              }
            ]}
          />
              <Section
            nameCategory="Info"
            id=""
            //icon={} future icon
            name="Info"
            subSections={[
              {
                name: "Latitude",
                tagColor: "rgba(77,45,255)",
                value: "43243"
              },
              {
                name: "Longitude",
                tagColor: "rgba(24,223,235)",
                value: "432432"
              },
              {
                name: "Latitude",
                tagColor: "rgba(77,45,255)",
                value: "43243"
              },
              {
                name: "Longitude",
                tagColor: "rgba(24,223,235)",
                value: "432432"
              }
            ]}
          />
        </nav>
        <CountentWrapper />
      </main>
    );
  }
}
export default Countent;
