import React from "react";
import { FaJs, FaReact, FaAngular, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiElm,
  SiHaskell,
  SiMicrosoftazure,
  SiApache,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

export const skills = [
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
    Component: SiMysql,
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
