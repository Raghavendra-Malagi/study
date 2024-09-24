// import React, { act } from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import RestaurantMenu from "../RestaurantMenu";
// import MOCK_DATA from "./MockData/mockResMenu.json";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import Heading from "../Heading";
// import { BrowserRouter } from "react-router-dom";
// import Cart from "../Cart";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// it("Should load the Restuarant Menu Component", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Heading />
//           <RestaurantMenu />
//           <Cart />
//         </Provider>
//       </BrowserRouter>
//     );
//   });
//   const panel = screen.getByText("Recommended (20)");
//   fireEvent.click(panel);
//   const foodItem = screen.getAllByTestId("foodItems");
//   expect(foodItem.length).toBe(20);
//   const cartItems = screen.getByText("Cart (0)");
//   expect(cartItems).toBeInTheDocument();
//   const cartBtns = screen.getAllByTestId("addtocart");
//   fireEvent.click(cartBtns[0]);
//   const cartData = screen.getByText("Cart (1)");
//   expect(cartData).toBeInTheDocument();
//   fireEvent.click(cartBtns[1]);
//   expect(screen.getByText("Cart (2)")).toBeInTheDocument();
//   expect(screen.getAllByTestId("foodItems").length).toBe(22);
//   fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
//   expect(screen.getAllByTestId("foodItems").length).toBe(20);
//   expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
// });
