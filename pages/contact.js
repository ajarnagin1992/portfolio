import React, { Component } from "react";
import ContactSection from "components/ContactSection";
import { Meta } from "components/Meta";
import { PageMargins } from "layout/layout";

export default class contact extends Component {
  render() {
    return (
      <PageMargins>
        <Meta title="Andrew Jarnagin - Contact" />
        <ContactSection />
      </PageMargins>
    );
  }
}
