'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '../../../utils/cn';

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const [columns, setColumns] = useState<string[][]>([]);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const getColumnsForScreenSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const distributeImages = () => {
    const columnCount = getColumnsForScreenSize();
    const cols: string[][] = Array.from({ length: columnCount }, () => []);
    images.forEach((image, index) => {
      cols[index % columnCount].push(image);
    });
    setColumns(cols);
  };

  useEffect(() => {
    distributeImages();
    window.addEventListener('resize', distributeImages);
    return () => window.removeEventListener('resize', distributeImages);
  }, [images]);

  return (
    <div
      className={cn('h-[40rem] items-start overflow-y-auto w-full', className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {columns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="grid gap-10">
            {column.map((image, imgIndex) => (
              <motion.div
                style={{ y: translateY }}
                key={`image-${colIndex}-${imgIndex}`}
                className="flex justify-center"
              >
                <Image
                  src={image}
                  className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 hover:scale-105 transition-all duration-300 ease-in-out max-w-[400px]"
                  height={400}
                  width={400}
                  alt={`thumbnail-${colIndex}-${imgIndex}`}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
