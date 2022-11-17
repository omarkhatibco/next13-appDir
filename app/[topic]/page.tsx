'use client';
import { fetcher } from 'utls/fetcher';
import { use } from 'react';

export default function Page({ params, searchParams }) {
  const { topic } = params;
  const images = use(fetcher(`topics/${topic}/photos`));

  return (
    <div className='grid gap-4 grid-cols-4'>
      {images.map((image) => (
        <img
          className='w-full h-48 object-cover'
          key={image.id}
          src={image.urls.small}
          alt={'img'}
        />
      ))}
    </div>
  );
}
