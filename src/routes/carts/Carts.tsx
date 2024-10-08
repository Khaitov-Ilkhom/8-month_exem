import { useSelector } from "react-redux";
import {  RootState } from "../../redux/store";
import CartTable from "../../components/cart-table/CartTable.tsx";
import {Products} from "../../types";
import Navbar from "../../components/navbar/Navbar.tsx";

const Carts = () => {
  const { cartProduct }: { cartProduct: Products[] } = useSelector((state: RootState) => state.cart);

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <div className="my-[120px] flex-grow px-8">
            <div className="w-full flex flex-col items-end">
              <div className="w-full">
                <h2 className=" text-left text-3xl font-bold mb-5">
                  Product Cart
                </h2>
              </div>
              <table className="w-full cart-table">
                <thead className=" ">
                <tr>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col"><p>Quantity</p></th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody className="pt-5">
                {cartProduct && cartProduct.length > 0 ? (
                    cartProduct.map((product) => (
                        <CartTable key={product.id} product={product} />
                    ))
                ) : (
                    <tr className="w-full">
                      <td colSpan={6} className="text-center py-10">
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
