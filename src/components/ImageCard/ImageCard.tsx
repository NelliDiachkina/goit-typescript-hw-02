import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard = ({
  smallUrl,
  bigUrl,
  description,
  onImageClick,
}: ImageCardProps) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={smallUrl}
        alt={description || undefined}
        onClick={() => {
          onImageClick({ bigUrl, description });
        }}
      />
    </div>
  );
};

export default ImageCard;
