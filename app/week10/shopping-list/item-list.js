"use client";
import React, { useState } from 'react';
import Item from './item'; // Import Item component

const ItemList = ({ items, onItemSelect }) => { // Add the items and onItemSelect props
  const [sortBy, setSortBy] = useState('name');

  // Create a copy of the items prop
  let sortedItems = [...items];

  // Sort the copied items based on sortBy
  sortedItems.sort((a, b) => {
    // Check if both a and b have valid name properties
    if (typeof a.name === 'string' && typeof b.name === 'string') {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        // Check if both a and b have valid category properties
        if (typeof a.category === 'string' && typeof b.category === 'string') {
          return a.category.localeCompare(b.category);
        } else {
          // Handle the case where a.category or b.category is not a valid string
          // Maybe log a warning or handle differently based on your application's needs
          console.warn('Invalid category property encountered');
          return 0;
        }
      }
    } else {
      // Handle the case where a.name or b.name is not a valid string
      // Maybe log a warning or handle differently based on your application's needs
      console.warn('Invalid name property encountered');
      return 0;
    }
  });
  
  // Additional check for verifying the output
  sortedItems.forEach(item => {
    console.log(`Name: ${item.name || 'N/A'}, Category: ${item.category || 'N/A'}`);
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
    name={item.data.name}
    quantity={item.data.quantity}
    category={item.data.category}
    onSelect={() => onItemSelect(item)} // Pass onSelect prop to Item
  />
))}
  {sortedItems.length === 0 && <p>No items to display</p>}
</ul>

    </div>
  );
};

export default ItemList;
