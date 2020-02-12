import React, { Component, Fragment } from "react";

class NewSection extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {this.props.setCategory ? <li className="cd-label">{this.props.nameCategory}</li> : ""}
          <li className="has-children overview active">
            <a href="#0">{this.props.name}</a>
            <ul>
              {this.props.subSections.map(subsection => {
                return (
                  <li key={subsection.key}>
                    <a href={subsection.link}>
                      {subsection.name}
                      <span
                        className="count"
                        Style={`background-color: ${subsection.tagColor}`}
                      >
                        {subsection.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default NewSection;
