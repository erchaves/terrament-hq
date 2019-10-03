import React from "react";

class Section extends React.Component {
  render() {
    return (
      <div className={`page-screen page-screen-${this.props.id}`} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
