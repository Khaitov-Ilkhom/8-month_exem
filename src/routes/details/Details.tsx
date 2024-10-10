import {useParams} from "react-router-dom";
import {useGetSingleProductsQuery} from "../../redux/api/productsApi.ts";
import Navbar from "../../components/navbar/Navbar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {useState} from "react";
import {Image, message} from "antd";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {addToCart} from "../../redux/slice/cartSlice.ts";
import {Products} from "../../types";
import notImage from "../../images/sorry-image-not-available.jpg";

const Details = () => {
  const {id} = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const {data} = useGetSingleProductsQuery({id})

  const {currency}: { currency: string } = useSelector((state: RootState) => state.currency);

  const changedCurrency = (cur: number) => {
    switch (currency) {
      case "uzs":
        return (cur * 12800).toFixed(2) + " UZS"
      case "rub":
        return (cur * 96).toFixed(2) + " RUB"
      default:
        return cur.toFixed(2) + " USD"
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      message.error("Quantity cannot be less than 1");
    }
  };

  const handleAddToCart = (data: Products, quantity: number, color: string) => {
    dispatch(addToCart({...data, quantity, color}));
    message.success(`${data.name} added to cart`);
    setQuantity(1);
  };

  return (
      <div className="w-full mx-auto">
        <Navbar/>
        {
            data && <div className="max-w-6xl mx-auto p-8">
              <div
                  className="relative flex flex-col lg:flex-row items-start justify-center lg:space-x-12 bg-white p-8">
                <div className="flex-1 lg:order-1 text-center lg:text-left">
                  <div className="text-xs font-bold bg-black text-white px-2 py-1 inline-block mb-2">
                    DEAL
                  </div>

                  <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
                    <p className="text-gray-400 text-md capitalize">{data.brand}, {data.category && data.category + ","} {data.product_type}</p>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="flex text-yellow-400 space-x-1">
                      {[...Array(5)].map((_, index) => (
                          <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                          >
                            <path
                                d="M12 18.26l-5.053 2.938 1.354-5.804L2.9 9.852l5.962-.53L12 4.26l3.137 5.062 5.963.53-4.4 4.542 1.354 5.804L12 18.26z"/>
                          </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-500">({data.id} reviews)</p>
                  </div>

                  <div className="py-4 mb-2">
                    <p className="text-gray-500">{data.description}</p>
                  </div>
                </div>

                <div className="relative w-full lg:w-1/3 mb-6 lg:mb-0 lg:order-2">
                  <Image className="w-full mx-auto object-contain"
                         src={data.image_link || notImage}
                         onError={e => e.currentTarget.src = "https://ndpp.co.in/wp-content/uploads/2018/01/sorry-image-not-available.jpg"} alt={data.name}
                    />
                </div>

                <div className="flex-1 lg:order-3 text-center lg:text-left">
                  <div className="">
                    <div className="mb-4">
                      <p className="text-red-600 text-3xl font-bold mb-2">{changedCurrency(+data.price * 0.90)}</p>
                      <p className="text-gray-400 line-through text-xl">{changedCurrency(+data.price)}</p>
                    </div>

                    <div className="grid grid-cols-6 gap-2 my-4">
                      {data.product_colors.map((color, index) => (
                          <button
                              key={index}
                              onClick={() => setSelectedColor(color.hex_value)}
                              className={selectedColor === color.hex_value ? "h-10 w-10 rounded border-2 border-pink-700 shadow-md" : "h-10 w-10 rounded border-2 border-pink-300 shadow-md"}
                              style={{backgroundColor: color.hex_value}}
                              title={color.colour_name}
                          ></button>
                      ))}
                    </div>

                    <div className="w-full flex items-center justify-start my-4">
                      <div className="flex flex-col justify-start items-start w-full">
                        <div className="flex items-center gap-3 rounded-lg border border-[#56b280] px-3 py-[5px]">
                          <AiOutlineMinus
                              onClick={() => handleDecrement()}
                              className="text-[#56b280] text-xl font-light transition-transform active:scale-90"
                          />
                          <span className="w-5 text-center">{quantity}</span>
                          <AiOutlinePlus
                              onClick={() => handleIncrement()}
                              className="text-[#56b280] text-xl font-light transition-transform active:scale-90"
                          />
                        </div>
                      </div>

                      <button
                          onClick={() => handleAddToCart(data, quantity, selectedColor)}
                          className="w-full rounded-lg border border-[#56b280] text-[#56b280] text-xl font-light py-1 transition-transform hover:bg-[#56b280] hover:text-white">+
                        Add to cart
                      </button>
                    </div>

                    <p className="text-green-600 mb-2">Есть в наличии!</p>
                    <div className="bg-purple-500 text-white p-4 rounded-lg mb-6">
                      <p>Get a gift when you purchase {data.name} perfumes worth
                        over {changedCurrency(+data.price * 0.90)}</p>
                      <p>There are 12 days left until the end of the promotion 05:27:04</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

        }
      </div>
  )
}
export default Details
