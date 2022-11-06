import React from 'react';
import { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigete = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
