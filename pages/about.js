import React, { Component } from "react";
import { Meta } from "../components/Meta";
import SkillSection from "../components/SkillSection";

export default class about extends Component {
  render() {
    return (
      <div>
        <Meta />
        <div className="flex flex-col max-w-3xl m-auto">
          <h1 className="text-5xl p-10">About me</h1>
          <h2 className="text-lg py-2">
            {"Hi, I'm Andrew, I'm a full-stack web developer looking for work!"}
          </h2>
          <p>
            Aliqua esse laboris nostrud exercitation ex. Ullamco aute pariatur
            sit sit officia anim nostrud proident id et sint elit voluptate.
            Dolore in commodo do fugiat ea tempor mollit. Aliquip esse proident
            enim Lorem consectetur amet cillum irure reprehenderit occaecat
            enim. Labore fugiat occaecat commodo magna. Ipsum nulla aliqua est
            adipisicing do consequat aute velit.
          </p>
        </div>
        <SkillSection />
      </div>
    );
  }
}
