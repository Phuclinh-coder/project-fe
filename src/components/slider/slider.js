import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from '../../asset/image/slider.png';
import "../../asset/css/slider.css";
function UncontrolledExample() {
    return (
        <div className='wrapper'>
            <Carousel className='slider'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/298762482_433305082169875_8305116540340576984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=psk3d6MbUrkAX_NhFu0&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBdIMAeMnEV8eH1kOW_Glahy53fVo8xDr84UhkX3jJFmQ&oe=644AED78"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slider"
                    src={ImageSlider}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slider"
                    src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/329776277_494142002921887_5518787557990266632_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=obXPGxYosC4AX9-YElj&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAsufec_Cdqo1YMCNrtw_qnx0x-rExwn9O1Le1kLTlRPg&oe=644AD9C2"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default UncontrolledExample;