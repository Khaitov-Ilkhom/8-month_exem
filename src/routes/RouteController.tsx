import {useRoutes} from "react-router-dom";
import React, {LazyExoticComponent} from "react";
import {SuspenseElement as Suspense} from "../utils/Index.tsx";

const Home:LazyExoticComponent<any> = React.lazy(() => import("./home/Home.tsx"))
const Liked:LazyExoticComponent<any> = React.lazy(() => import("./liked-product/LikedProduct.tsx"))

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
        }
      ])
  )
}
export default RouteController
