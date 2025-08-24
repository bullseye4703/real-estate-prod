"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          variants={itemVariants}
          className="my-12 text-center"
        >
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            Find your Dream Rental Property Today!
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Explore our extensive listings of rental properties, from cozy apartments to spacious homes, all designed to meet your needs and preferences. Whether you are looking for a short-term lease or a long-term stay, we have the perfect place for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
            {[
                {
                    imageSrc: '/landing-icon-wand.png',
                    title: 'Search for Properties',
                    description: 'Browse through our extensive collection of rental properties in your desired location.',
                },
                {
                    imageSrc: '/landing-icon-calendar.png',
                    title: 'Book Your Rental',
                    description: 'Once you\'ve found the perfect property, book it directly via our platform with ease.',
                },
                {
                    imageSrc: '/landing-icon-heart.png',
                    title: 'Enjoy Your New Home',
                    description: 'Move into your new rental property and enjoy a hassle-free living experience.',
                },
            ].map((card, index)=>(
                <motion.div key={index} variants={itemVariants}>
                    <DiscoverCard{...card}/>
                </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 hover:shadow-xl transition-shadow duration-300">
    {/* Icon container */}
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 flex items-center justify-center mx-auto h-12 w-12 shadow-md">
      <Image
        src={imageSrc}
        width={30}
        height={30}
        alt={title}
        className="object-contain"
      />
    </div>

    {/* Title */}
    <h3 className="mt-4 text-xl font-semibold text-gray-800">
      {title}
    </h3>

    {/* Description */}
    <p className="mt-2 text-base text-gray-500 max-w-xs mx-auto">
      {description}
    </p>
  </div>
);


export default DiscoverSection;
