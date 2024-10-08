import { TiDelete } from "react-icons/ti";
import {  Image, Popconfirm, PopconfirmProps, message } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  selectCartProductById,
  removeFromCart,
} from "../../redux/slice/cartSlice.ts"
import { RootState } from "../../redux/store";
import {Products} from "../../types";

const CartTable = ({ product  }: { product: Products }) => {
  const dispatch = useDispatch();
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
      <tr className="w-full text-center">
        <td className="w-[150px]">
          <Image
              width={100}
              height={100}
              className="w-full"
              src={product.image_link}
              alt=""
          />
        </td>
        <td className="font-bold w-[300px]">{product.name}</td>
        <td className="font-bold w-[200px]">{changedCurrency(+product.price)}</td>
        <td className="w-[250px] text-center ">
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
        <td>
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
        </td>
      </tr>
  );
};

export default CartTable;
