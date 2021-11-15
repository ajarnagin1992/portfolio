import React, { Component } from "react";
import { Meta } from "../components/Meta/Meta";
import SkillSection from "../components/SkillSection/SkillSection";

export default class about extends Component {
  render() {
    return (
      <div>
        <Meta />
        <SkillSection />
      </div>
    );
  }
}
