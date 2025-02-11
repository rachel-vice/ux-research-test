import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom"; // Import Jest DOM assertions
import { act } from "react-dom/test-utils";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source: "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

describe("App Component", () => {
  // You can set up a mock implementation for any asynchronous actions if needed by your app,
  // but here we assume that the facts are preloaded or handled within the component without supabase

  // Check that the header is rendered
  it("renders the app header", async () => {
    render(<App />);
    act(() => {
      expect(screen.getByText("Today I Learnt")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Share a Fact" })
      ).toBeInTheDocument();
    });
  });

  // Check that facts are displayed on load
  it("fetches and displays facts on load", async () => {
    render(<App />);
    // Wait for the facts to be displayed after the asynchronous call
    await waitFor(() => {
      expect(screen.getByText("React is being developed by Meta (formerly facebook)")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%")).toBeInTheDocument();
    });
  });
});