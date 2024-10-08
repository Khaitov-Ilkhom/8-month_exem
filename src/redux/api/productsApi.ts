import {api} from "./index.ts";
import {Products} from "../../types";


const productsApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    getAllProducts: build.query<Products[], void>({
      query: () => ({
        url: "/products.json",
      }),
      providesTags: ["PRODUCT"]
    })
  })
})

export const {useGetAllProductsQuery} = productsApi