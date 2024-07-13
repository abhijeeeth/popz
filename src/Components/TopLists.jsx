import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TopLists = () => {
  const cardsData = [
    { title: 'Top List', description: 'This is the description for card 1.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 2.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 3.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 4.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 5.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
    { title: 'Top List', description: 'This is the description for card 6.', image: 'https://cdn.dribbble.com/userupload/8836066/file/original-2bfe4732960eb8783a6d1561f5d7703f.jpg?resize=1024x1024' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:m-20">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, image }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white/10 shadow-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-900">{description}</p>
      </div>
    </motion.div>
  );
};

export default TopLists;
