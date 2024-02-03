'use client';
import { LayoutGrid } from './ui/layout-grid';

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-12 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: 'md:col-span-2',
    thumbnail: '/grid-1.jpg',
  },
  {
    id: 2,
    className: 'col-span-1',
    thumbnail: '/grid-2.jpg',
  },
  {
    id: 3,
    className: 'col-span-1',
    thumbnail: '/grid-3.jpg',
  },
  {
    id: 4,
    className: 'md:col-span-2',
    thumbnail: '/grid-4.jpg',
  },
];
