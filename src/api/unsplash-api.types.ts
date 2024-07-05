export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}
