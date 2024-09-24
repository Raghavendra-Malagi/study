// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Contact from "../Contact";
// import "@testing-library/jest-dom";

// //describe method is used to group the test cases - describe block is for grouping the test cases
// //We can have describe inside another describe to group the test cases
// //describe block contains description and the callback function
// describe("These test cases are related to contact us page", () => {
//   //test is the name of the function and we can also write test as it
//   //it is the alias of test

//   //Before All will render the content placed inside it before all of the test
//   // beforeAll(() => {
//   //   console.log("Before All");
//   //   //Doing something before all the test cases
//   // });
//   // afterAll(() => {
//   //   console.log("Aefore All");
//   // });
//   // beforeEach(() => {
//   //   console.log("Before Each");

//   //   //Doing something before each test cases
//   //   //helpful for doing any clean up tasks before each test cases
//   // });
//   // afterEach(() => {
//   //   console.log("After Each");
//   // });
//   // test("Testing Contact page", () => {
//   //   render(<Contact />);
//   //   const heading = screen.getByRole("heading");
//   //   expect(heading).toBeInTheDocument();
//   // });
//   //it is used to say
//   //it("Should load the button in the contact component")
//   it("check for the presence of button", () => {
//     render(<Contact />);
//     const button = screen.getByText("Submit");
//     expect(button).toBeInTheDocument();
//   });

//   test("Check for the presence of placeholder name", () => {
//     render(<Contact />);
//     const placeholderName = screen.getByPlaceholderText("Email");
//     expect(placeholderName).toBeInTheDocument();
//   });

//   test("Get All input elements", () => {
//     render(<Contact />);
//     const input = screen.getAllByRole("textbox");
//     // console.log(input.length);
//     expect(input.length).toBe(1);
//   });
// });
