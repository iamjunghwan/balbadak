import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreArrow />,
    nextArrow: <NextArrow />,
  };
  interface arrowProps {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
  function PreArrow({ className, style, onClick }: arrowProps) {
    return (
      <div
        className={className}
        style={{ ...style, display: "white", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function NextArrow({ className, style, onClick }: arrowProps) {
    return (
      <div
        className={className}
        style={{ ...style, display: "white", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
    </>
  );
};

export default Carousel;
