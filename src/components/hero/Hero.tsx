// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../images/b15e345ed19891c3b84c5373c43f4923.png";
import logo2 from "../../images/0ee6b4633ebcd2c45d7dd2d81364f35a.jpg";
import logo3 from "../../images/Cosmetic-header-1.jpg";
import logo4 from "../../images/beauty-products-vanity-hero.jpeg";
import logo5 from "../../images/beauty-supply-hero.jpg";
import logo6 from "../../images/kosmetika-kisti-teni-chasy-dukhi-pudra-lak.jpg";

const categories = [
  { id: 4, title: "Beverages", image: logo4 },
  { id: 5, title: "Snacks", image: logo5 },
  { id: 1, title: "Vegetables & Fruits", image: logo1 },
  { id: 2, title: "Grocery & Staples", image: logo2 },
  { id: 3, title: "Dairy & Eggs", image: logo3 },
  { id: 6, title: "Snacks", image: logo6 },
];

const Category_Carousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
      <div className="p-8">
        <Slider {...settings}>
          {categories.map((category) => (
              <div key={category.id} className="p-4 w-full">
                <div className="text-center w-full">
                  <img
                      src={category.image}
                      alt={category.title}
                      className="mx-auto mb-4 max-w-screen max-h-[400px] object-contain rounded-xl"
                  />
                </div>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default Category_Carousel;
