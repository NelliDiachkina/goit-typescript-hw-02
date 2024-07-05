import { UnsplashPhoto } from '../../api/unsplash-api.types';

export interface ImageGalleryProps {
  images: UnsplashPhoto[];
  onImageClick: (info: { bigUrl: string; description: string | null }) => void;
}
