import React from 'react';
import categories from '../categories';

const CategorySelector = ({ category, chooseCategory }) => {
  return (
    <div className='category-selector'>
      <p>Select Category</p>
      <select value={category} onChange={(e) => chooseCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
