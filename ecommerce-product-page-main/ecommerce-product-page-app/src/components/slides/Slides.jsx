import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './slides.scss';

const Slides = (props) => {
  const images = props.images;
  const imagesItems = images.map((image, index) => {
    return (
      <div
        className={'carousel-item' + (index === 0 ? ' active' : '')}
        key={index}
      >
        <img src={image} className="d-block w-100" alt="..." />
      </div>
    );
  });

  return (
    <div id="carouselProduct" className="carousel carousel slide">
      <div className="carousel-inner">{imagesItems}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProduct"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselProduct"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slides;
