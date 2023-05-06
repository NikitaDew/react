import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaruantMenu";
import Profile from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
//import InstaMart from "./components/InstaMart";

//Chunking
// Code Splitting
//Dynamic Bundling
//Lazy loading
//On Demand loading
//dynamic import
//Always lozy load on the top not inside the component
const InstaMart = lazy(() => import("./components/InstaMart"));

//upon on demand loading --> upon rending --> suspend render
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshay Saini",
    email: "support@namastedev.com",
  });
  console.log(user);
  return (
    <div className="app">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
      {/* <Body /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // localhost:1234/about
        element: <About />,
        children: [
          {
            path: "profile", //localhost:1234/about/profile
            //path: "/profile" ==> localhost:1234/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...............</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
