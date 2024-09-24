// import React from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import Heading from "../Heading";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// test("Should load the header component with login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Heading />
//       </Provider>
//     </BrowserRouter>
//   );
//   const login = screen.getByRole("button");
//   expect(login).toBeInTheDocument();
// });
// //Check specific button
// // const loginBtn = screen.getByRole("button"); This is the good way to find the button
// //const loginBtn = screen.getByText("Login");
// //When there are multiple button how to get one particular which has name login
// test("Should load the header component with login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Heading />
//       </Provider>
//     </BrowserRouter>
//   );
//   const loginBtn = screen.getByRole("button", { btnName: "login" });
//   expect(loginBtn).toBeInTheDocument();
// });
// //Check cart with zero items
// test("Cart with zero items on heading component load", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Heading />
//       </Provider>
//     </BrowserRouter>
//   );
//   const checkCart = screen.getByText("Cart (0)");
//   expect(checkCart).toBeInTheDocument();
// });
// //Check if the text present or not
// test("Should check for cart text in the heading component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Heading />
//       </Provider>
//     </BrowserRouter>
//   );
//   const checkText = screen.getByText(/cart/i);
//   expect(checkText).toBeInTheDocument();
// });
// //Check text on button click
// test("Should check button  text change on click in Heading Component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Heading />
//       </Provider>
//     </BrowserRouter>
//   );
//   const loginBtn = screen.getByRole("button", { btnName: "login" });
//   fireEvent.click(loginBtn);
//   const logoutBtn = screen.getByRole("button", { btnName: "logout" });
//   expect(logoutBtn).toBeInTheDocument();
// });
