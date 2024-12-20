import {useSearchProductQuery} from "../../redux/api/productsApi";
import {Typography} from "antd";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";
import Navbar from "../../components/navbar/Navbar.tsx";
import Cards from "../../components/cards/Cards.tsx";
import Footer from "../../components/footer/Footer.tsx";

const {Title} = Typography;

const Search = () => {
  const {getParam} = useSearchParamsHook();
  const search = getParam("brand");
  const {data} = useSearchProductQuery({brand: search})

  return (
      <div className="w-full mx-auto min-h-screen flex flex-col">
        <Navbar/>
        <div className="w-full mx-auto flex-grow my-[40px]">
          <Title className="capitalize" level={2}>All products</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data && data?.length === 0 ? (
                <Title level={2}>No products found</Title>
            ) : (
                data?.map((product) => (
                    <Cards key={product.id} product={product}/>
                ))
            )}
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default Search
