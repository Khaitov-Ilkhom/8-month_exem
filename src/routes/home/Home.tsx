import {useGetAllProductsQuery} from "../../redux/api/productsApi.ts";
import {Products} from "../../types";
import Cards from "../../components/cards/Cards.tsx";
import Skeletons from "../../components/skeleton/Skeleton.tsx";
import {Button} from "antd";
import {useState} from "react";
import Navbar from "../../components/navbar/Navbar.tsx";

const Home = () => {
  const [more, setMore] = useState<number>(12);
  const {data, isLoading} = useGetAllProductsQuery()
  const cards = Array.from({length: 12});

  console.log(data)

  return (
      <div>
        <Navbar/>
        Home

        <div className="grid grid-cols-4 gap-6 px-6">
          {
            isLoading ? cards.map((_, index) => <Skeletons key={index}/>) :
                data?.slice(52, (52 + more)).map((product: Products) =>
                    <Cards key={product.id} product={product}/>
                )
          }
        </div>
        <div className="w-full mx-auto flex justify-center my-6">
          <Button disabled={isLoading || more === 144} onClick={() => setMore(more + 4)}>Show more</Button>
        </div>
      </div>
  )
}
export default Home
