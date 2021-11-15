import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import { Meta } from "components/Meta/Meta";

export default class contact extends Component {
  render() {
    return (
      <div>
        <Meta />
        <ContactForm />
      </div>
    );
  }
}
