import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// we do not use this imoort for lazy loading
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

function Error404() {
  return <h2>404 Not found</h2>;
}

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication code written for eg

  useEffect(() => {
    const data = { name: "Malvika Madan" };

    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div class="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* Parent route: AppLayout */}
      <Route path="/" element={<AppLayout />}>
        {/* <Route index element={<Body />} /> Default child */}
        <Route path="/" element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="grocery"
          element={
            <Suspense fallback={<Shimmer></Shimmer>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout></AppLayout>);
