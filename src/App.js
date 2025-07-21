import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

const API_KEY = '48007231-367bc7d7092a1af501def7b38';
const PER_PAGE = 12;

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
        );
        const data = await res.json();
        setImages(prev => page === 1 ? data.hits : [...prev, ...data.hits]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => setPage(prev => prev + 1);

  const openModal = img => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={loadMore} />}
      {selectedImage && <Modal largeImageURL={selectedImage} onClose={closeModal} />}
    </>
  );
}

export default App;
