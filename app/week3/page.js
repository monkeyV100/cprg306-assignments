import React from 'react';
import Link from 'next/link';
import ItemList from "./item-list";

function Page() {
  return (
    <main className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />

      <div style={{ marginTop: '20px' }}>
        <Link href="/"> 
            <button>Go Back to Home Page</button>
        </Link>
      </div>
    </main>
  );
}

export default Page;
