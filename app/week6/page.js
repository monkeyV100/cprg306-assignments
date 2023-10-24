"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item'; // Import NewItem component
import itemsData from './items.json'; // Import items.json


// Add the "use client" directive at the top of the file (if needed).

const Page = () => {
  // Initialize the state variable items with itemsData
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the items state
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> {/* Pass the event handler to NewItem */}
      <ItemList items={items} /> {/* Pass the items state to ItemList */}

      
      <div style={{ marginTop: '20px' }}>
        <Link href="/"> 
          
            <button>Go Back to Home Page</button>
          
        </Link>
      </div>
      
    </main>
  );
};

export default Page;
