import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => (
  <li onClick={() => onSelect(name)}>
    {name} - {quantity} ({category})
  </li>
);

export default Item;
