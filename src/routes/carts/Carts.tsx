import { useSelector } from "react-redux";
import {  RootState } from "../../redux/store";
import CartTable from "../../components/cart-table/CartTable.tsx";
import {Products} from "../../types";
import Navbar from "../../components/navbar/Navbar.tsx";

const Carts = () => {
  const { cartProduct }: { cartProduct: Products[] } = useSelector((state: RootState) => state.cart);

  return (
      <div className="w-full mx-auto min-h-screen flex flex-col">
        <Navbar/>
        <div className="my-[50px] flex-grow px-8">
            <div className="w-full flex flex-col">
              <div className="!text-center">
                <h2 className="text-center text-3xl font-bold mb-5">
                  Product Cart
                </h2>
              </div>
              <table className="cart-table">
                <thead>
                <tr className="">
                  <th className="py-4 text-center">Product Image</th>
                  <th className="py-4 text-center">Product Name</th>
                  <th className="py-4 text-center">Product Price</th>
                  <th className="py-4 text-center">Product Total</th>
                  <th className="py-4 text-center">Quantity</th>
                  <th className="py-4 text-center">Colors</th>
                  <th className="py-4 !text-center">Action</th>
                </tr>
                </thead>
                <tbody className="pt-5">
                {cartProduct && cartProduct.length > 0 ? (
                    cartProduct.map((product) => (
                        <CartTable key={product.id} product={product} />
                    ))
                ) : (
                    <tr className="w-full">
                      <td colSpan={6} className="py-10">
                        Cart is empty
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
        </div>
      </div>
  );
};
export default Carts;
