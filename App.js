import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

// import Grocery from "./src/components/Grocery";

// const Grocery = lazy(() => import("./src/components/Grocery"));
const Grocery = lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Raghavendra Malagi",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="font-lato">
            <Heading />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading............</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
