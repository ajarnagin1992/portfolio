import React, { Component } from "react";
import ContactSection from "components/ContactSection";
import { Meta } from "components/Meta";

export default class contact extends Component {
  render() {
    return (
      <div>
        <Meta />
        <ContactSection />
      </div>
    );
  }
}
