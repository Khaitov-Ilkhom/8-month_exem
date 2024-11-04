import {TiDelete} from "react-icons/ti";
import {Image, Popconfirm, PopconfirmProps, message} from "antd";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slice/cartSlice.ts"
import {RootState} from "../../redux/store";
import {Products} from "../../types";
import notImage from "../../images/sorry-image-not-available.jpg"

const CartTable = ({product}: { product: Products }) => {
  const dispatch = useDispatch();
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

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success(`${product.name} removed in cart`);
    dispatch(removeFromCart({id: product.id, color: product.color}));
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error(`${product.name} not removed in cart`);
  };

  const handleDecrement = (product: Products) => {
    if (product.quantity && product.quantity > 1) {
      dispatch(decrementQuantity({id: product.id, color: product.color}));
      console.log(product)
    } else {
      dispatch(removeFromCart({id: product.id, color: product.color}));
      message.error(`${product.name} removed in cart`);
    }
  };

  const handleIncrement = (product: Products) => {
    dispatch(incrementQuantity({id: product.id, color: product.color}));
    console.log(product)
  };

  return (
      <tr className="w-full mx-auto text-center border-b">
        <td className="">
          <Image width={100} className="w-full" alt={product.name}
                 src={product.image_link || notImage}
                 onError={e => e.currentTarget.src = "https://ndpp.co.in/wp-content/uploads/2018/01/sorry-image-not-available.jpg"}
          />
        </td>
        <td className="font-bold max-w-[300px] ">{product.name}</td>
        <td className="font-bold max-w-[200px] ">{changedCurrency(+product.price)}</td>
        <td className="font-bold max-w-[200px] ">{changedCurrency(+product.price * product.quantity)}</td>
        <td className="text-center ">
          <div className="flex items-center gap-5 justify-center">
            <AiOutlineMinus
                onClick={() => handleDecrement(product)}
                className="text-black text-xl font-bold transition-transform active:scale-90"
            />
            <span className="w-5 text-center">{product.quantity}</span>
            <AiOutlinePlus
                onClick={() => handleIncrement(product)}
                className="text-black text-xl font-bold transition-transform active:scale-90"
            />
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center">
            <span style={{backgroundColor: product.color}} className="text-black w-8 mx-auto h-8 rounded-full"></span>
          </div>
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
                  className="text-4xl text-center block mx-auto text-black"
              />
            </Popconfirm>
          </div>
        </td>
      </tr>
  );
};

export default CartTable;
