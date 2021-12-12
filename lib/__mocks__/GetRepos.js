import { mockdata } from "./mockdata";
export function returnMockData() {
  return {
    repodata: mockdata,
    isLoading: false,
    isError: false,
  };
  export function returnNoData() {
    return {
      repodata: null,
      isLoading: false,
      isError: true,
    };
  }
  export function returnLoadingStatus() {
    return {
      repodata: null,
      isLoading: true,
      isError: false,
    };
  }
}
