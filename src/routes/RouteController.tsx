import {useRoutes} from "react-router-dom";
import React, {LazyExoticComponent} from "react";
import {SuspenseElement as Suspense} from "../utils/Index.tsx";

const Home:LazyExoticComponent<any> = React.lazy(() => import("./home/Home.tsx"))
const Liked:LazyExoticComponent<any> = React.lazy(() => import("./liked-product/LikedProduct.tsx"))
const Details:LazyExoticComponent<any> = React.lazy(() => import("./details/Details.tsx"))
const Carts:LazyExoticComponent<any> = React.lazy(() => import("./carts/Carts.tsx"))
const Search:LazyExoticComponent<any> = React.lazy(() => import("./search/Search.tsx"))

const RouteController = () => {
  return (
      useRoutes([
        {
          path: "",
          element: <Suspense><Home/></Suspense>
        },
        {
          path: "liked-product",
          element: <Suspense><Liked/></Suspense>
        },
        {
          path: "details/:id",
          element: <Suspense><Details/></Suspense>
        },
        {
          path: "carts",
          element: <Suspense><Carts/></Suspense>
        },
        {
          path: "search",
          element: <Suspense><Search/></Suspense>
        }
      ])
  )
}
export default RouteController
