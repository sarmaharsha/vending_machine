import React, { useState } from "react";

const items = [
  { id: 1, name: "Biscuits", price: 1.5 },
  { id: 2, name: "Chocolate", price: 2.0 },
  { id: 3, name: "Chips", price: 1.0 },
  { id: 4, name: "Soda", price: 1.2 },
];

const VendingMachine = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setTotal(total + item.price);
  };

  const checkout = () => {
    alert(`Total Bill: $${total.toFixed(2)}`);
    setSelectedItems([]);
    setTotal(0);
  };

  return (
    <div className="container">
      <h2>Vending Machine</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => addItem(item)}>Add</button>
          </div>
        ))}
      </div>
      <hr />
      <div className="selected-items">
        <h3>Selected Items:</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={checkout} disabled={total === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default VendingMachine;
