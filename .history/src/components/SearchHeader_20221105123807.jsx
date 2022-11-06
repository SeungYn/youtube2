import React from 'react';
import { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
export default function SearchHeader() {
  const [text, setText] = useState('');
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
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
