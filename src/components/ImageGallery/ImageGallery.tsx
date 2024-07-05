import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls: { small, regular }, description }) => (
        <li key={id}>
          <ImageCard
            smallUrl={small}
            bigUrl={regular}
            description={description}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
