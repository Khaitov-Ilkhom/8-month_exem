import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";
import {message} from "antd";
import React from "react";
import {Link} from "react-router-dom";

import logo from "../../images/IMG_20241009_102615-removebg-preview.png"
import amazon from "../../images/icons8-amazon-pay-96 1.png"
import visa from "../../images/icons8-visa-100 (1) 1.png"
import mastercard from "../../images/icons8-master-card-96 1.png"
import amex from "../../images/icons8-american-express-100 1.png"
import discover from "../../images/icons8-discover-card-100 1.png"
import icons from "../../images/Group 253.png"

const Footer = () => {
  const form = React.createRef<HTMLFormElement>()


  const handleMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    message.success('Thank you for subscribing!')
    form.current?.reset()

  }

  return (
      <div className="max-w-[1440px] mx-auto w-full p-2 pb-[30px] bg-fuchsia-300">
        <div className="w-full flex justify-between items-center gap-3 px-[30px]">
          <div>
            <img className="max-w-[300px]" src={logo} alt="Image logo site"/>
          </div>

          <div>
            <form ref={form}
                  className="w-full flex items-center justify-between gap-3 max-w-[350px] py-2 borber-b border-black bg-white px-5 rounded-lg">
              <input className="w-full !bg-transparent outline-none" type="email" placeholder="Enter your email"
                     required/>
              <button onClick={(e) => handleMessage(e)} type="reset" className="text-pink-400">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="w-full flex justify-between items-start gap-6 px-[80px] text-gray-600">
          <div className="max-w-[430px]">
            <p className="pb-2 hover:text-gray-900 duration-500">We are passionate about empowering you to embrace your natural beauty and achieve a glowing, healthy
              complexion.</p>
            <p className="w-full flex justify-start items-center gap-2 pb-2 hover:text-gray-900 duration-500">
              <MdOutlineLocationOn size={20}/>
              <span>55 ABC Complex, Navrangpura, Ahmedabad - 380009</span>
            </p>

            <p className="w-full flex justify-start items-center gap-2 pb-2 hover:text-gray-900 duration-500">
              <FiPhoneCall/> <span>+998 (00) 123-45-67</span>
            </p>

            <p className="w-full flex justify-start items-center gap-2 hover:text-gray-900 duration-500">
              <SlEnvolopeLetter/> <span>naturalfood@gmail.com</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl hover:text-gray-900 duration-500 pb-1">Navigate</h3>

            <p className="text-lg hover:text-gray-900 duration-500 pb-1"><Link to="/">Home</Link></p>
            <p className="text-lg hover:text-gray-900 duration-500 pb-1"><Link to="/">Liked Products</Link></p>
            <p className="text-lg hover:text-gray-900 duration-500 pb-1"><Link to="/">Carts</Link></p>
          </div>

          <div>
            <h3 className="text-2xl hover:text-gray-900 duration-500">Need help?</h3>

            <p className="hover:text-gray-900 duration-500 pb-1">Store Location</p>
            <p className="hover:text-gray-900 duration-500 pb-1">Pricing</p>
            <p className="hover:text-gray-900 duration-500 pb-1">Regarding Stock</p>
          </div>

          <div>
            <h3 className="text-2xl hover:text-gray-900 duration-500">Policy</h3>

            <p className="hover:text-gray-900 duration-500 pb-1">Terms Of Service</p>
            <p className="hover:text-gray-900 duration-500 pb-1">Privacy Policy</p>
            <p className="hover:text-gray-900 duration-500 pb-1">Refund Policy</p>
          </div>
        </div>

        <div className="w-full flex justify-between items-end gap-3 px-[50px] text-gray-600 pb-3">
          <div>
            <img className="max-w-[140px]" src={icons} alt="Icons image"/>
          </div>

          <div className="">
            <p className="text-xl hover:text-gray-900 duration-500 pb-1">Supported Payment Systems</p>

            <div className="flex justify-center items-center gap-2">
              <img className="max-w-[50px]" src={visa} alt="Visa"/>
              <img className="max-w-[50px]" src={mastercard} alt="MasterCard"/>
              <img className="max-w-[50px]" src={amazon} alt="Amazon"/>
              <img className="max-w-[50px]" src={amex} alt="Amex"/>
              <img className="max-w-[50px]" src={discover} alt="Discover"/>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Footer
