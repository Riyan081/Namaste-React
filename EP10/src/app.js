import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

//chuncking
//Code splitting 
//lazy loading

const Grocery = lazy(()=>import("./components/Grocery"));//when we call this this comes but react is so fast that it already renderd and it donot execute it and throw error so we use suspense


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
     <Outlet/> {/*this outlet will be filled with je bhe slash ke aage hai  */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,

    },
      {
        path:"/about",
        element : <About/>,
      },
      {
        path:"/contact",
        element : <Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element : <RestaurantMenu/>,
      },
      {
        path:"/grocery",
        element : <Suspense fallback={<h1>hi gigga</h1>}><Grocery/></Suspense>,
      },
    ],
    errorElement:<Error/>,
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
