import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './slides.scss';

const Slides = (props) => {
  const imagesItems = props.images.map((image, index) => {
    return (
      <div
        className={'carousel-item' + (index === 0 ? ' active' : '')}
        key={index}
      >
        <img src={image} className="d-block w-100" alt="..." />
      </div>
    );
  });

  const thumbnailImages = props.thumbnails.map((thumb, index) => {
    return (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselProduct"
        data-bs-slide-to={index}
        aria-label={'Slide' + index}
        className={index === 0 ? 'active' : ''}
      >
        <img src={thumb} className="thumbnail d-block w-100 " />
      </button>
    );
  });
  console.log(thumbnailImages);
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
      <div className="carousel-indicators">{thumbnailImages}</div>
    </div>
  );
};

export default Slides;
