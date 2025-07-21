import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </header>
  );
}
