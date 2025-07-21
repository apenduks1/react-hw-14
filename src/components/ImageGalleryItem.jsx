export default function ImageGalleryItem({ src, onClick }) {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={src} alt="" />
    </li>
  );
}
