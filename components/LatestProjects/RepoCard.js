import { HoverLink } from "../Generic/HoverLink";
import React from "react";
import { FaLink } from "react-icons/fa";

export function RepoCard(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col justify-between p-3 bg-background rounded space-y-1 h-40"
    >
      <div className="flex flex-row justify-between items-baseline">
        <h1 className="text-lg font-semibold w-2/3">
          {props.name.length <= 20 ? (
            props.name
          ) : (
            <div data-tip={props.name} data-for="tooltip">
              {props.name.slice(0, 17)}...
            </div>
          )}
        </h1>
      </div>
      <p>{props.desc}</p>
      <div className="flex flex-row space-x-3 h-5">
        {props.topics.map((topic) => {
          return (
            <p
              key={props.id + topic}
              className="text-xs font-extralight px-2 py-0.5 bg-tertiary-accent rounded-xl"
            >
              {topic.length <= 10 ? (
                topic
              ) : (
                <span data-tip={topic} data-for="tooltip">
                  {topic.slice(0, 7)}...
                </span>
              )}
            </p>
          );
        })}
      </div>
    </a>
  );
}
