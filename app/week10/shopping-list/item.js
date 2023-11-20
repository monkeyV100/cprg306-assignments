import React from 'react';

const Item = ({ id, name, quantity, category, onSelect }) => (
  <li onClick={() => onSelect(id)}>
    {name} - {quantity} ({category})
  </li>
);

export default Item;
