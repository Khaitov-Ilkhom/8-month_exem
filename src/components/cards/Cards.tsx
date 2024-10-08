import {Products} from "../../types";
import {FaHeart, FaRegHeart} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {addToLiked} from "../../redux/slice/likedSlice.ts";
import {AppDispatch, RootState} from "../../redux/store";


const Cards = ({product}: { product: Products }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);

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

        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">Longwear Lipstick</p>

        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="ml-2 text-gray-600">(175)</span>
        </div>

        <div className="mt-2">
          <span className="text-red-500 text-lg font-semibold">522000 сум</span>
          <span className="line-through ml-2 text-gray-500">533000 сум</span>
        </div>
      </div>
  )
}
export default Cards
