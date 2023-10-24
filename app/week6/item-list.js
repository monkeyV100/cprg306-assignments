"use client";
import React, { useState } from 'react';
import Item from './item'; // Import Item component

const ItemList = ({ items }) => { // Add the items prop
  const [sortBy, setSortBy] = useState('name');

  // Create a copy of the items prop
  let sortedItems = [...items];

  // Sort the copied items based on sortBy
  sortedItems.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button
        style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        onClick={() => setSortBy('name')}
      >
        Sort by Name
      </button>
      <button
        style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        onClick={() => setSortBy('category')}
      >
        Sort by Category
      </button>

      <ul>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
