import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImageURL={largeImageURL}
          onClick={() => onImageClick(largeImageURL)}
        />
      ))}
    </ul>
  );
}
