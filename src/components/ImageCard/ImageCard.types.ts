export interface ImageCardProps {
  smallUrl: string;
  bigUrl: string;
  description: string | null;
  onImageClick: (info: { bigUrl: string; description: string | null }) => void;
}
