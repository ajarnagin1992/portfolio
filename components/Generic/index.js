import React from "react";
import Link from "next/link";

export function StyledHeader(props) {
  return <h1 className="text-5xl p-5 md:p-10">{props.text}</h1>;
}

export function HoverLink(props) {
  return (
    <Link href={props.href} target={props.target} rel={props.rel}>
      <a className="flex w-max rounded p-3 text-white bg-tertiary-normal hover:bg-tertiary-hover">
        <p className="inline-flex items-center space-x-1">
          {props.icon}
          <span>{props.label}</span>
        </p>
      </a>
    </Link>
  );
}
