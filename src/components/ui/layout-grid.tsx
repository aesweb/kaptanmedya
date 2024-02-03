'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import Image from 'next/image';

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-6">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, 'relative')}>
          <motion.div
            className={cn(
              card.className,
              ' overflow-hidden inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
            )}
            layout
          >
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        className={cn('absolute w-full left-0 top-0 bg-black opacity-0 z-10')}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200 rounded-lg hover:scale-105',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
    </div>
  );
};
