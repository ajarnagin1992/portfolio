import React from "react";
import Link from "next/link";

export function HoverLink(props) {
  return (
    <Link href={props.href}>
      <a
        className="flex flex-row w-max rounded p-3 text-texttertiary bg-tertiary-normal hover:bg-tertiary-hover"
        target={props.target}
        rel={props.rel}
      >
        <p className="inline-flex items-center space-x-1 w-max">
          {props.icon}
          <span>{props.label}</span>
        </p>
      </a>
    </Link>
  );
}
