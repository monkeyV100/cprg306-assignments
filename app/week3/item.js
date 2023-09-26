
function Item(props) {
    return (
        <div>
            <ul className="border border-gray-300 p-4 mb-4 rounded-md">
                <li className="text-xl font-semibold">{props.name}</li>
                <li className="text-gray-600">Quantity: {props.quantity}</li>
                <li className="text-gray-600">Category: {props.category}</li>
            </ul>
        </div>  
    );
  }
  
  export default Item;