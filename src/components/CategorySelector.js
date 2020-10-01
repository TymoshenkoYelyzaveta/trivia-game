import React from 'react';
import categories from '../categories';

const CategorySelector = () => {
  return (
    <div className='category-selector'>
      <p>Select Category</p>
      <select>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
