/**
 * @jest-environment jsdom
 */
import mockdata from "./mockdata";
import { GetRepos } from "../../lib/GetRepos";
jest.mock("../../lib/GetRepos", () => {
  return { repodata: mockdata, isLoading: false, isError: false };
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { LatestProjects } from "./";

describe("LatestProjects", () => {
  it("renders a heading and displays 6 repositories", () => {
    render(<LatestProjects />);
    const lel = screen.getByTestId("RepoGrid__name");
    expect(lel.textContent).toEqual("boogers");
  });
});
