import { useEffect } from 'react';

export default function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
