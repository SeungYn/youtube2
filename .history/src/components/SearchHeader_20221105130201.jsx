import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigete = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigete(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || ' ');
  }, [keyword]);
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex item-center'>
        <BsYoutube className='test' />
        <h1>Youtube</h1>
      </Link>
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
