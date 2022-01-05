import React from "react";

export function StyledHeader(props) {
  return <h1 className="text-5xl py-5 md:py-10">{props.children}</h1>;
}
