/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { LatestProjects, RepoGrid } from "..";
import { returnMockData } from "../../../lib/__mocks__/GetRepos";

describe("LatestProjects", () => {
  it("renders a heading and displays 6 repositories", () => {
    const { repodata, isLoading, isError } = returnMockData();
    console.log(isLoading);
    render(
      <LatestProjects
        repodata={repodata}
        isLoading={isLoading}
        isError={isError}
      />
    );

    const header = screen.getByRole("h1");
  });
});
