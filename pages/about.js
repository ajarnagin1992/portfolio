import React, { Component } from "react";
import { Meta } from "components/Meta";
import { PageMargins } from "layout/layout";
import SkillSection from "components/SkillSection";

export default class about extends Component {
  render() {
    return (
      <PageMargins>
        <Meta title="Andrew Jarnagin - About" />
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl p-5 md:p-10">About me</h1>
          <h2 className="text-lg md:pl-20">
            {
              "Hi, I'm Andrew, I'm a full-stack web developer / software engineer looking for work!"
            }
          </h2>
          <div className="flex flex-col px-5 md:px-32 space-y-6">
            <p>
              {`I'm Andrew Jarnagin, avid gamer and a recent recipient of a BSc in Computer Science looking for my first role as a software engineer. I have experience developing software using agile-like SDLC methods and have led a team to develop a full stack web application for our University's IT department. I know I would make a valuable addition to your team.`}
            </p>
            <p>
              {`Currently I'm most proficient in C#, Python and Javascript. I have exposure to several modern web frameworks Spring, Node, ASP.Net, Next.js (hey im using this one now! 😀). I also have some familiarity with a few front-end development libraries like React.js, Angular.js and HTML/CSS5/JS. I have constructed and executed SQL queries, built database schema to describe complex systems using Entity Relation modeling. I am familiar with libraries such as Entity Framework that allow for easier and safer manipulation of database objects within the application. I have used Git extensively in my projects.`}
            </p>
            <p>
              {`In addition to my technical experience, I have a passion for helping others achieve their goals. I like to feel proud of the work that I provide and put everything I have into any project that I'm given. `}
            </p>
          </div>
        </div>
        <SkillSection />
      </PageMargins>
    );
  }
}
