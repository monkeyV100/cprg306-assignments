
import ItemList from "./item-list"

function Page() {
  return (
    <main className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList></ItemList>
    </main>
  );
}

export default Page;
