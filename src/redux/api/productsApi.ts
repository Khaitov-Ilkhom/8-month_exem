import {api} from "./index.ts";
import {Products} from "../../types";


const productsApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    getAllProducts: build.query<Products[], void>({
      query: () => ({
        url: "/products.json",
      }),
      providesTags: ["PRODUCT"]
    }),
    getSingleProducts: build.query<Products, string | any>({
      query: ({id}) => ({
        url: `/products/${id}.json`,
      }),
      providesTags: ["PRODUCT"]
    }),
    searchProduct: build.query<Products[], { brand: string | null }>({
      query: (params) => ({
        url: "/products.json",
        params
      }),
      providesTags: ["PRODUCT"]
    }),
    getCategory: build.query<Products[], { "product_type": string | null }>({
      query: (params) => ({
        url: "/products.json",
        params
      }),
      providesTags: ["PRODUCT"]
    }),
  })
})

export const {useGetAllProductsQuery, useSearchProductQuery, useGetSingleProductsQuery, useGetCategoryQuery} = productsApi