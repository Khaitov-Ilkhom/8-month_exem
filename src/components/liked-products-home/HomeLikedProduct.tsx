// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Products} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Cards from "../cards/Cards.tsx";
import {Typography} from "antd";

const {Title} = Typography;


const HomeLikedProduct = () => {
  const {products}: { products: Products[] } = useSelector((state: RootState) => state.like);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <div className="p-8">

        {
          products.length > 0 ? <div>
                <Title className="capitalize text-center py-2" level={2}>Liked Products</Title>
              </div>
              : <div></div>
        }

        <Slider {...settings}>
          {products.map((product) => (
              <Cards key={product.id} product={product}/>
          ))}
        </Slider>
      </div>
  )
}
export default HomeLikedProduct
