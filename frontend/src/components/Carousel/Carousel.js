import Slider from "react-animated-slider";

import "react-animated-slider/build/horizontal.css";
import './Carousel.css';

function Carousel(props) {
  return (
    <Slider autoplay="2000">
      {
        props.slides.map((slide, index) =>
          (
            <div
              key={index}
              style={{
                background: `url('${slide.link}') no-repeat center center`,
                objectFit: `cover`,
                /* gives a shadow to images to highlight where image has same color as its parent's background */
                filter:
                  `drop-shadow(
                    1px 2px 8px hsl(200deg 50% 40% / 0.2)
                  )
                  drop-shadow(
                    2px 4px 16px hsl(200deg 50% 40% / 0.2)
                  )`
              }}
            />
          )
        )
      }
    </Slider>
  )
}

export default Carousel;