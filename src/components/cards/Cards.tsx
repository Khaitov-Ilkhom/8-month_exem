import {Products} from "../../types";
import {FaHeart, FaRegHeart} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {addToLiked} from "../../redux/slice/likedSlice.ts";
import {AppDispatch, RootState} from "../../redux/store";
import {useNavigate} from "react-router-dom";


const Cards = ({product}: { product: Products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);
  const {currency}: { currency: string } = useSelector((state: RootState) => state.currency);

  const changedCurrency = (cur: number) => {
    switch (currency) {
      case "uzs": return (cur * 12800).toFixed(2) + " UZS"
      case "rub": return (cur * 96).toFixed(2) + " RUB"
      default: return cur.toFixed(2) + " USD"
    }
  }

  const navigateDetails = (id: number) => {
    navigate(`/details/${id}`)
  }

  const isProductLiked = (id: number) => {
    return products?.some(product => product.id === id)
  };

  const handleLike = (product: Products) => {
    dispatch(addToLiked(product));
  }

  return (
      <div className="bg-white p-4 rounded-lg shadow-md max-w-sm group hover:scale-105 transition duration-700">
        <div className="w-full flex justify-between items-center h-[30px]">
          <h2 className="bg-black text-white text-xs px-2 py-1 inline-block rounded mb-2">DEAL</h2>
          <button onClick={() => handleLike(product)}
              className="opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 bg-white transition duration-700 shadow-xl p-2 rounded-full">

            {
              isProductLiked(product.id) ? <FaHeart className="text-red-500" size={22}/> :
                  <FaRegHeart className="text-red-500" size={22}/>
            }
          </button>
        </div>

        <div>
          <img
              src={product.image_link}
              alt="CoverGirl Outlast Longwear Lipstick"
              className="w-full h-48 object-contain mb-4"
          />
        </div>

        <h2 className="text-xl font-semibold line-clamp-1">{product.name}</h2>
        <p className="text-gray-500 capitalize">{product.brand}, {product.category && product?.category + ","} {product.product_type}</p>

        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="ml-2 text-gray-600">({product.id})</span>
        </div>

        <div className="mt-2">
          <span className="text-red-500 text-lg font-semibold">{changedCurrency(+product.price * 0.90)}</span>
          <span className="line-through ml-2 text-gray-500">{changedCurrency(+product.price)}</span>
        </div>
        <div>
          <button className="w-full px-4 py-2 rounded-xl shadow-xl mt-2" onClick={() => navigateDetails(product.id)}>More details</button>
        </div>
      </div>
  )
}
export default Cards
