import './Carousel.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import Slider from "react-slick";

function Carousel () {
    
    const settings = {
        className: 'slider',
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 2,
        infinite: false
    };

    return (
        <Slider {...settings}> 
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img2} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
        </Slider>
    )
}

export default Carousel;