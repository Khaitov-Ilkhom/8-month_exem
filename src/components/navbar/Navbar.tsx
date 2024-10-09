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
import {PiHandbagFill} from "react-icons/pi";
import {changeCurrency} from "../../redux/slice/currencySlice.ts";
import logo from "../../images/IMG_20241009_102615-removebg-preview.png"

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);
  const {getParam} = useSearchParamsHook()
  const {data} = useSearchProductQuery({brand: search})
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);
  const {cartProduct}: { cartProduct: Products[] } = useSelector((state: RootState) => state.cart);
  const {currency}: { currency: string } = useSelector((state: RootState) => state.currency);

  const handleSearchSubmit = (value: { search: string }) => {
    navigate(`/search?brand=${value.search}`);
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
      <div
          className="w-full mx-auto bg-[#f7f8fa80] shadow-xl py-2">
        <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center md:flex-row flex-col gap-4 select-none px-10">
          <div className="w-[300px]">
            <Form
                initialValues={{search: getParam("brand")}}
                onFinish={handleSearchSubmit}
                className={hidden ? "flex justify-center items-center gap-3 bg-[#fefefe] max-w-[250px] w-full py-1 px-3 rounded-[62px] border border-gray-300  hover:border-[#56b280]" : "w-[300px] md:w-[60px] flex items-start h-[40px] py-1 px-3 rounded-[62px] border border-gray-300  hover:border-[#56b280]"}
            >
              <BiSearch onClick={() => setHidden(!hidden)} className="text-[#0000005f] text-3xl"/>
              <Form.Item
                  name="search"
                  className={hidden ? "w-full !mb-0 block" : "md:hidden block w-full"}
                  rules={[{required: false}]}
              >
                <AutoComplete
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        navigate(`/search?brand=${search}`);
                      }
                    }}
                    options={data?.map((product) => ({
                      label: (
                          <Link
                              className="block capitalize"
                              key={product.id}
                              to={`/details/${product.id}`}
                          >
                            {product.brand}
                          </Link>
                      ),
                    }))}
                    style={{width: "100%"}}
                    className="custom-autocomplete w-full"
                    onSelect={onSelect}
                    onSearch={(text) => (text ? loadData(text) : loadData(""))}
                    placeholder="Search..."
                />
              </Form.Item>
            </Form>
          </div>
          <div className="hidden md:block">
            <Link to='/'><img className="max-w-[150px]" src={logo} alt="Logotip Make up store"/></Link>
          </div>
          <div className="max-w-[300px] w-full">
            <ul className="flex items-center justify-center gap-6">
              <li>
                <Select
                    className="border rounded-lg min-w-[100px]"
                    defaultValue={currency}
                    onChange={handleChange}
                    options={[
                      {value: 'uzs', label: 'UZS'},
                      {value: 'usd', label: 'USD'},
                      {value: 'rub', label: 'RUB'},
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
      </div>
  )
}
export default Header 