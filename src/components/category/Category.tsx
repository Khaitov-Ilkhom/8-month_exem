import {Link} from "react-router-dom";

import category1 from "../../images/DERMA.PK-71.png"
import category2 from "../../images/Pressed-Matte-Mineral-Bronzer-02.webp"
import category3 from "../../images/images.jpeg"
import category4 from "../../images/liquid-eyeliner-for-beginners.jpg"
import category5 from "../../images/THE-JAMES-CHARLES-PALETTE-2.jpg"
import category6 from "../../images/Apply-Foundation-Step-22.jpg"
import category7 from "../../images/lipliner_bundle.webp"
import category8 from "../../images/5efefd94c36ef475084d3eb8_1593769364270.jpg"
import category9 from "../../images/fabulash-mascara-607.webp"
import category10 from "../../images/Nail_Polish.webp"

const Category = () => {
  return (
      <div className="max-w-[1440px] mx-auto px-8 my-6">
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-4">
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=blush" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category1} alt="1"/></Link>
              <p className="my-2 font-semibold">Blush</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=bronzer" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category2} alt="2"/></Link>
              <p className="my-2 font-semibold">Bronzer</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=eyebrow" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category3} alt="3"/></Link>
              <p className="my-2 font-semibold">Eyebrow</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=eyeliner" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category4} alt="4"/></Link>
              <p className="my-2 font-semibold">Eyeliner</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=eyeshadow" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category5} alt=""/></Link>
              <p className="my-2 font-semibold">Eyeshadow</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=foundation" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category6} alt=""/></Link>
              <p className="my-2 font-semibold">Foundation</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=lip_liner" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category7} alt=""/></Link>
              <p className="my-2 font-semibold">Lip Liner</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=lipstick" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category8} alt=""/></Link>
              <p className="my-2 font-semibold">Lip Stick</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=mascara" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category9} alt=""/></Link>
              <p className="my-2 font-semibold">Mascara</p>
            </li>
            <li className="text-center">
              <Link className="w-full flex justify-center items-center border border-gray-500 p-1 max-w-[120px] h-[120px] rounded-full" to="/category?product_type=nail_polish" >
                <img className="rounded-full max-w-[100px] object-cover w-full h-[100px]" src={category10} alt=""/></Link>
              <p className="my-2 font-semibold">Nail Polish</p>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default Category
