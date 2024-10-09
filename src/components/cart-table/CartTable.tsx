import {TiDelete} from "react-icons/ti";
import {Image, Popconfirm, PopconfirmProps, message} from "antd";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  selectCartProductById,
  removeFromCart,
} from "../../redux/slice/cartSlice.ts"
import {RootState} from "../../redux/store";
import {Products} from "../../types";
import {useState} from "react";
import notImage from "../../images/sorry-image-not-available.jpg"

const CartTable = ({product}: { product: Products }) => {
  const [colorsQuantity, setColorsQuantity] = useState<number>(8);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const cartProduct = useSelector((state: RootState) =>
      selectCartProductById(state, product.id)
  );
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

  const quantity = cartProduct?.quantity || 0;

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success(`${product.name} removed in cart`);
    dispatch(removeFromCart(product.id));
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error(`${product.name} not removed in cart`);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(product.id));

    } else {
      dispatch(removeFromCart(product.id));
      message.error(`${product.name} removed in cart`);
    }
  };

  return (
      <tr className="w-full mx-auto text-center border">
        <td className="border-r">
          <Image width={100} className="w-full" alt={product.name}
                 src={product.image_link || notImage}
                 onError={e => e.currentTarget.src = "https://ndpp.co.in/wp-content/uploads/2018/01/sorry-image-not-available.jpg"}
          />
        </td>
        <td className="font-bold w-[300px] border-r">{product.name}</td>
        <td className="font-bold w-[200px] border-r">{changedCurrency(+product.price)}</td>
        <td className="text-center border-r">
          <div className="flex items-center gap-5 justify-center">
            <AiOutlineMinus
                onClick={handleDecrement}
                className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
            />
            <span className="w-5 text-center">{quantity}</span>
            <AiOutlinePlus
                onClick={handleIncrement}
                className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
            />
          </div>
        </td>
        <td className="flex justify-center items-center flex-col border-r py-2">
          <div className="grid grid-cols-4 gap-3 my-2">
            {product.product_colors.slice(0, colorsQuantity).map((color, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color.hex_value)}
                    className={selectedColor === color.hex_value ? "h-10 w-10 rounded border-2 border-slate-700 shadow-md" : "h-10 w-10 rounded border border-slate-400 shadow-md"}
                    style={{backgroundColor: color.hex_value}}
                    title={color.colour_name}
                ></button>
            ))}
          </div>
          <button className="px-4 border border-gray-800 rounded-lg"
                  onClick={() => setColorsQuantity(colorsQuantity + 4)}>More
          </button>
        </td>
        <td className="">
          <div>
            <Popconfirm
                title={`Delete the ${product.name}`}
                description={`Are you sure to delete this ${product.name}?`}
                onConfirm={confirm}
                onCancel={cancel}
                okText="Delete"
                cancelText="Cancel"
            >
              <TiDelete
                  className="text-4xl text-center block mx-auto text-[#56b280]"
              />
            </Popconfirm>
          </div>
        </td>
      </tr>
  );
};

export default CartTable;
