import Cards from "../../components/cards/Cards.tsx";
import {Products} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Navbar from "../../components/navbar/Navbar.tsx";

const LikedProduct = () => {
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);

  return (
      <div className="w-full bg-white min-h-screen">
        <Navbar/>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-6">
            {products.map((product) => (
                <Cards key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
  )
}
export default LikedProduct
