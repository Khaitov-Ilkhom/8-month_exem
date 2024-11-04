import Cards from "../../components/cards/Cards.tsx";
import {Products} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Navbar from "../../components/navbar/Navbar.tsx";
import {Typography} from "antd";
import Footer from "../../components/footer/Footer.tsx";

const { Title } = Typography;

const LikedProduct = () => {
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);

  return (
      <div className="w-full mx-auto bg-white min-h-screen">
        <Navbar/>
        <div className="my-[30px] ">
          <Title className="capitalize text-center" level={2}>All liked products</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-[20px] px-6">
            {products.map((product) => (
                <Cards key={product.id} product={product}/>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
  )
}
export default LikedProduct
