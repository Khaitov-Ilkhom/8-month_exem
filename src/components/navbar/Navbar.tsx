import {Badge, Form} from "antd";
import {FaHeart} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {Recipe} from "../../types";
// import {AppDispatch, RootState} from "../../redux/store";
// import {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {LuSettings2} from "react-icons/lu";
// import useSearchParamsHook from "../../paramsHook/paramsHook.ts";
// import {useSearchRecipeQuery} from "../../redux/api/productsApi.ts";
import {AiFillProduct} from "react-icons/ai";


const Navbar = () => {
  // const [search, setSearch] = useState("");
  // const {getParam} = useSearchParamsHook()
  // const {data: searchData} = useSearchRecipeQuery({q: search})

  const navigate = useNavigate()

  const handleSearchSubmit = (value: string) => {
    navigate(`/search?q=${value.search}`);
  };
  // const onSelect = (data) => {
  //   console.log("onSelect", data);
  // };
  // const loadData = async (searchText: string) => {
  //   try {
  //     setSearch(searchText);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
      <div className="w-full flex justify-between items-center px-10 bg-[#f7f8fa80] shadow-xl py-2">
        <div>
          <Link to='/'><img className="max-w-[150px]" src={"nnn"} alt="Logo"/></Link>
        </div>
        <div>
          <Form initialValues={{search: "q"}} onFinish={handleSearchSubmit}
                className="flex items-center gap-3 bg-[#fefefe] h-[45px] w-[500px] py-1 px-4 rounded-[62px] border border-gray-300 hover:border-[#1677FF]">
            <BiSearch className="text-[#0000005f] text-2xl"/>
            <Form.Item
                name="search"
                className="w-full !mb-0"
                rules={[{required: false}]}
            >
              {/*<AutoComplete*/}
              {/*    onKeyDown={(e) => {*/}
              {/*      if (e.key === 'Enter') {*/}
              {/*        navigate(`/search?q=${search}`);*/}
              {/*      }*/}
              {/*    }}*/}
              {/*    options={searchData?.payload?.map((item) => ({*/}
              {/*      label: (*/}
              {/*          <Link*/}
              {/*              className="block"*/}
              {/*              key={item._id}*/}
              {/*              to={`/car-details/${item._id}`}*/}
              {/*          >*/}
              {/*            {item.name}*/}
              {/*          </Link>*/}
              {/*      ),*/}
              {/*    }))}*/}
              {/*    className="search_input"*/}
              {/*    onSelect={onSelect}*/}
              {/*    onSearch={(text: string) =>*/}
              {/*        text ? loadData(text) : loadData({payload: []})*/}
              {/*    }*/}
              {/*    placeholder="Search..."*/}
              {/*/>*/}
            </Form.Item>
            <LuSettings2 className="text-[24px] text-gray-400"/>
          </Form>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-4">
            <li className="text-lg">
              <Link className="flex justify-center items-center" to="/liked">
                <Badge count={1}>
                  <FaHeart className="text-red-600 text-[24px]"/>
                </Badge></Link></li>
            <li className="text-lg pt-2">
              <Link to="/carts"><Badge count={1}>
                <AiFillProduct className="text-[28px]"/></Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default Navbar