import React, { useState } from 'react';
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(list.map(item => item.category))];

  // Filter list based on selected category
  const filteredList = selectedCategory === 'All' ? list : list.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-900">
        <div className="py-24 pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl dark:text-white">
            We're delighted to have you{" "}
            <span className="text-blue-500 dark:text-blue-300">Here! :)</span>
          </h1>
          <p className="mt-12 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
        </div>
        <div className="">
          <div className="flex justify-center mb-8 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 mx-2 mt-2 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-white dark:text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredList.map(item => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
