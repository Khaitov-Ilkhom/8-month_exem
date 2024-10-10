import {useGetAllProductsQuery} from "../../redux/api/productsApi.ts";
import {Products} from "../../types";
import Cards from "../../components/cards/Cards.tsx";
import Skeletons from "../../components/skeleton/Skeleton.tsx";
import {Button, Typography} from "antd";
import {useState} from "react";
import Navbar from "../../components/navbar/Navbar.tsx";
import Hero from "../../components/hero/Hero.tsx";
import Category from "../../components/category/Category.tsx";
import HomeLikedProduct from "../../components/liked-products-home/HomeLikedProduct.tsx";

const { Title } = Typography;

const Home = () => {
  const [more, setMore] = useState<number>(12);
  const {data, isLoading} = useGetAllProductsQuery()
  const cards = Array.from({length: 12})

  return (
      <div className="w-full mx-auto min-h-screen">
        <Navbar/>
        <Hero/>
        <Category/>

        <HomeLikedProduct/>
        <div className="my-[40px]">
          <Title className="capitalize text-center" level={2}>{isLoading ? "Products are waiting to be loaded" : "All products" }</Title>

          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 my-[30px]">
            {
              isLoading ? cards.map((_, index) => <Skeletons key={index}/>) :
                  data?.slice(52, (52 + more)).map((product: Products) =>
                      <Cards key={product.id} product={product}/>
                  )
            }
          </div>
          <div className="w-full mx-auto flex justify-center my-6">
            <Button className="bg-fuchsia-300 text-white px-4 py-1" disabled={isLoading || more === 144} onClick={() => setMore(more + 4)}>Show more</Button>
          </div>
        </div>
      </div>
  )
}
export default Home
