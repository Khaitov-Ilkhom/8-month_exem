import Navbar from "../../components/navbar/Navbar.tsx";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";
import {useGetCategoryQuery} from "../../redux/api/productsApi.ts";
import Skeletons from "../../components/skeleton/Skeleton.tsx";
import {Products} from "../../types";
import Cards from "../../components/cards/Cards.tsx";
import {Button, Typography} from "antd";
import {useState} from "react";
import Footer from "../../components/footer/Footer.tsx";

const { Title } = Typography;

const Categories = () => {
  const {getParam} = useSearchParamsHook();
  const {data, isLoading} = useGetCategoryQuery({"product_type": getParam("product_type")})
  const [more, setMore] = useState<number>(12);
  const cards = Array.from({length: 12})

  console.log(data)

  return (
      <div>
        <Navbar/>

        <div className="my-[40px]">
          <Title className="capitalize text-center"
                 level={2}>{isLoading ? "Products are waiting to be loaded" : `All ${getParam("product_type")} brand products`}</Title>

          <div
              className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 my-[30px]">
            {
              isLoading ? cards.map((_, index) => <Skeletons key={index}/>) :
                  data?.slice(0, more).map((product: Products) =>
                      <Cards key={product.id} product={product}/>
                  )
            }
          </div>
          <div className="w-full mx-auto flex justify-center my-6">
            <Button disabled={isLoading || more === data?.length} onClick={() => setMore(more + 4)}>Show more</Button>
          </div>
        </div>

        <Footer/>
      </div>
  )
}
export default Categories
