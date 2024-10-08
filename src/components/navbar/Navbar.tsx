import {AutoComplete, Badge, Form, Select} from "antd";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {useState} from "react";
import {BiSearch} from "react-icons/bi";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";
import {useSearchProductQuery} from "../../redux/api/productsApi.ts"
import {Products} from "../../types"
import { PiHandbagFill } from "react-icons/pi";
import {changeCurrency} from "../../redux/slice/currencySlice.ts";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const {getParam} = useSearchParamsHook()
  const {data} = useSearchProductQuery({brand: search})
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);
  const { cartProduct }: { cartProduct: Products[] } = useSelector((state: RootState) => state.cart);
  const {currency}: { currency: string } = useSelector((state: RootState) => state.currency);

  const handleSearchSubmit = (value: { search: string }) => {
    navigate(`/search?q=${value.search}`);
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const loadData = async (searchText: string) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.error("Error loading search data:", error);
    }
  };

  const handleChange = (value: string) => {
    dispatch(changeCurrency(value))
  }

  return (
      <div className="w-full flex justify-between items-center px-10 bg-[#f7f8fa80] shadow-xl py-2">
        <div>
          <Link to='/'><h2>Hello</h2></Link>
        </div>
        <div>
          <Form
              initialValues={{ search: getParam("brand") }}
              onFinish={handleSearchSubmit}
              className="flex items-center  gap-3 bg-[#fefefe]  w-[500px] py-1 px-4 rounded-[62px] border border-gray-300  hover:border-[#56b280]"
          >
            <BiSearch className="text-[#0000005f] text-2xl" />
            <Form.Item
                name="search"
                className="w-full !mb-0"
                rules={[{ required: false }]}
            >
              <AutoComplete
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/search?q=${search}`);
                    }
                  }}
                  options={data?.map((product) => ({
                    label: (
                        <Link
                            className="block"
                            key={product.id}
                            to={`/details/${product.id}`}
                        >
                          {product.brand}
                        </Link>
                    ),
                  }))}
                  style={{ width: "100%" }}
                  className="custom-autocomplete"
                  onSelect={onSelect}
                  onSearch={(text) => (text ? loadData(text) : loadData(""))}
                  placeholder="Search..."
              />
            </Form.Item>
          </Form>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Select
                  className="border rounded-lg"
                  defaultValue={currency}
                  onChange={handleChange}
                  options={[
                    { value: 'uzs', label: 'UZS' },
                    { value: 'usd', label: 'USD' },
                    { value: 'rub', label: 'RUB' },
                  ]}
              />
            </li>
            <li className="text-lg">
              <Link className="flex justify-center items-center" to="/liked-product"><Badge
                  count={products.length}>{products.length > 0 ?
                  <FaHeart className="text-red-600 text-[24px]"/> :
                  <FaRegHeart className="text-red-600 text-[24px]"/>}</Badge></Link></li>
            <li className="text-lg pt-2">
              <Link to="/carts"><Badge count={cartProduct.length}>
                <PiHandbagFill className="text-[28px]"/></Badge>
              </Link>
            </li>
          </ul>
        </div>

      </div>
  )
}
export default Header