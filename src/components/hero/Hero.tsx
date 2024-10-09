// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../images/sorry-image-not-available.jpg";
import logo2 from "../../images/sorry-image-not-available.jpg";
import logo3 from "../../images/sorry-image-not-available.jpg";
import logo4 from "../../images/sorry-image-not-available.jpg";
import logo5 from "../../images/sorry-image-not-available.jpg";
import logo6 from "../../images/sorry-image-not-available.jpg";

const categories = [
  { id: 1, title: "Vegetables & Fruits", image: logo1 },
  { id: 2, title: "Grocery & Staples", image: logo2 },
  { id: 3, title: "Dairy & Eggs", image: logo3 },
  { id: 4, title: "Beverages", image: logo4 },
  { id: 5, title: "Snacks", image: logo5 },
  { id: 6, title: "Home Care", image: logo6 },
];

const Category_Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
      <div className="p-8">
        <Slider {...settings}>
          {categories.map((category) => (
              <div key={category.id} className="p-4">
                <div className="border rounded-lg p-4 text-center">
                  <img
                      src={category.image}
                      alt={category.title}
                      className="mx-auto mb-4 w-full max-h-[400px] object-contain"
                  />
                </div>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default Category_Carousel;
