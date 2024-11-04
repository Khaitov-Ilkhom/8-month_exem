import {useParams} from "react-router-dom";
import {useGetSingleProductsQuery} from "../../redux/api/productsApi.ts";
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";
import ProductDetails from "../../components/product-details/ProductDetails.tsx";
import {Loading} from "../../utils/Index.tsx";
import productNotFound from "../../images/ProductNotFound.png"

const Details = () => {
  const {id} = useParams();
  const {data, isLoading, error} = useGetSingleProductsQuery({id})

  return (
      <div className="w-full mx-auto flex flex-col min-h-screen">
        <Navbar/>

        <div className="flex-grow">
          {
            isLoading ? <div><Loading/></div> :
                (
                    error ? (
                        <div className = " w-full flex items-center flex-col justify-center mt-10 ">
                          <h1 className = "text-4xl font-bold text-center text-[#656565]" >Product Not Found</h1>
                          <img className="w-[300px]" src={productNotFound} alt="" />
                        </div>
                    ) : ( data && <ProductDetails data={data} />)
                )
          }
        </div>

        <Footer/>
      </div>
  )
}
export default Details
