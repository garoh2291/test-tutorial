import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("Running before each tests");
  });

  beforeAll(() => {
    console.log("Running once before  all tests");
  });

  afterEach(() => {
    console.log("Running after each tests");
  });

  afterAll(() => {
    console.log("Running after all tests");
  });

  it("...", async () => {
    render(<MockList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it("...", async () => {
    render(<MockList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("...", async () => {
  //     render(<MockList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
