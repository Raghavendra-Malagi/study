// import React, { act } from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "./MockData/mockResList.json";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// test("Should load body component and load the search field", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });
//   const SearchBtn = screen.getByRole("button", { name: "Search" });
//   const SearchInput = screen.getByTestId("searchInput");
//   fireEvent.change(SearchInput, { target: { value: "pizza" } });
//   fireEvent.click(SearchBtn);
//   //screen should load 4 res cards
//   const cards = screen.getAllByTestId("resCard");
//   // console.log(cards.length);

//   expect(cards.length).toBe(5);
// });

// test("body component should load only top rated restaurants", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });
//   const topRated = screen.getByRole("button", { name: "Filter by rating" });
//   const filteredCards = screen.getAllByTestId("resCard");
//   expect(filteredCards.length).toBe(20);
// });
