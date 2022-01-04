import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiGit,
  SiBootstrap,
  SiVuedotjs,
  SiLinux,
  SiTypescript,
  SiSpring,
  SiElm,
  SiHaskell,
  SiMicrosoftazure,
  SiApache,
  SiNextdotjs,
} from "react-icons/si";
import { DiDotnet, DiMysql } from "react-icons/di";

export const skills = [
  {
    title: "Git",
    key: "git",
    Component: SiGit,
    Description: "",
  },
  {
    title: "Bootstrap",
    key: "bootstrap",
    Component: SiBootstrap,
    Description: "",
  },
  {
    title: "VueJS",
    key: "vuejs",
    Component: SiVuedotjs,
    Description: "",
  },
  {
    title: "Linux",
    key: "linux",
    Component: SiLinux,
    Description: "",
  },
  {
    title: "Typescript",
    key: "typescript",
    Component: SiTypescript,
    Description: "",
  },
  {
    title: "Spring",
    key: "spring",
    Component: SiSpring,
    Description: "",
  },
  {
    title: "CSS3",
    key: "css",
    Component: FaCss3,
    Description: "",
  },
  {
    title: "HTML5",
    key: "html",
    Component: FaHtml5,
    Description: "",
  },
  {
    title: "Javascript",
    key: "javascript",
    Component: FaJs,
    Description: "",
  },
  {
    title: "React",
    key: "react",
    Component: FaReact,
    Description: "",
  },
  {
    title: "Angular",
    key: "angular",
    Component: FaAngular,
    Description: "",
  },
  {
    title: ".NET",
    key: "net",
    Component: DiDotnet,
    Description: "",
  },
  {
    title: "Python",
    key: "python",
    Component: FaPython,
    Description: "",
  },
  {
    title: "Elm",
    key: "elm",
    Component: SiElm,
    Description: "",
  },
  {
    title: "Haskell",
    key: "haskell",
    Component: SiHaskell,
    Description: "",
  },
  {
    title: "Azure",
    key: "azure",
    Component: SiMicrosoftazure,
    Description: "",
  },
  {
    title: "Apache",
    key: "apache",
    Component: SiApache,
    Description: "",
  },
  {
    title: "MySQL",
    key: "mysql",
    Component: DiMysql,
    Description: "",
  },
  {
    title: "Node",
    key: "node",
    Component: FaNodeJs,
    Description: "",
  },
  {
    title: "NextJS",
    key: "nextjs",
    Component: SiNextdotjs,
    Description: "",
  },
].sort(function (a, b) {
  a = a.title.toLowerCase();
  b = b.title.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
});
