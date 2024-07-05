import { useState, useEffect, useRef } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import fetchPhotoSearch from '../../api/unsplash-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';

import css from './App.module.css';
import { UnsplashPhoto } from '../../api/unsplash-api.types';
import { ModalInfo } from './App.types';

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<boolean>(false);
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [description, setDescription] = useState<string | null>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPhotoSearch(searchQuery, page);
        setError(!data.total_pages);
        setErrorText('No search results found ...');
        setTotalPage(page < data.total_pages);
        setImages(prevImages => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
        setErrorText('Oops! Something went wrong! Reload!');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  useEffect(() => {
    if (page === 1 || !contentRef.current) {
      return;
    }

    contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [page, images]);

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleMore: () => void = () => {
    setPage(page + 1);
  };

  const handleModalOpen = ({ bigUrl, description }: ModalInfo) => {
    setSelectedImg(bigUrl);
    setDescription(description);
    setModalIsOpen(true);
  };

  const handleModalClose: () => void = () => {
    setSelectedImg('');
    setDescription('');
    setModalIsOpen(false);
  };

  return (
    <div ref={contentRef} className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleModalOpen} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={errorText} />}
      {images.length > 0 && totalPage && !isLoading && (
        <LoadMoreBtn onClick={handleMore} />
      )}
      <ImageModal
        bigUrl={selectedImg}
        isOpen={modalIsOpen}
        description={description}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default App;
