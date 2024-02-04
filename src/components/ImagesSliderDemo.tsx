'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ImagesSlider } from './ui/images-slider';

export function ImagesSliderDemo() {
  const images = ['/bg1.webp', '/bg2.webp', '/bg3.webp'];
  return (
    <ImagesSlider className="h-[50rem] py-12" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-semibold italic text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          KAPTAN MEDYA
          <br /> ORGANIZASYON
        </motion.p>
        <motion.p className="font-bold italic text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <p>0507 253 47 11</p>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
