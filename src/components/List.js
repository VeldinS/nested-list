import React, { useState } from 'react';
import './list.css';

const List = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = { name: `Item ${items.length + 1}`, children: [] };
        setItems([...items, newItem]);
    };

    const addChildItem = (index, parent) => {
        const newChild = { name: `${parent.name}.${parent.children.length + 1}`, children: [] };
        const newItems = [...items];
        const addChild = (arr, idx) => {
            if (idx.length === 0) return;
            if (idx.length === 1) {
                arr[idx[0]].children.push(newChild);
            } else {
                addChild(arr[idx[0]].children, idx.slice(1));
            }
        };
        addChild(newItems, index);
        setItems(newItems);
    };

    const editItem = (index, newName) => {
        const newItems = [...items];
        const edit = (arr, idx) => {
            if (idx.length === 0) return;
            if (idx.length === 1) {
                arr[idx[0]].name = newName;
            } else {
                edit(arr[idx[0]].children, idx.slice(1));
            }
        };
        edit(newItems, index);
        setItems(newItems);
    };

    const renderItems = (items, parentIndex = []) => {
        return (
            <ul className="list-wrapper">
                {items.map((item, index) => {
                    const currentIndex = [...parentIndex, index];
                    return (
                        <li key={item.name} className="list-item">
                            <input
                                className="list-input"
                                type="text"
                                value={item.name}
                                onChange={(e) => editItem(currentIndex, e.target.value)}
                            />
                            {parentIndex.length < 3 && (
                                <button
                                    className="add-button"
                                    onClick={() => addChildItem(currentIndex, item)}
                                >
                                    <span>
                                        Add Child
                                    </span>
                                </button>
                            )}
                            {renderItems(item.children, currentIndex)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="list-container">
            <button className="add-button top-level" onClick={addItem}>
                <span>
                    Add Top-Level Item
                </span>
            </button>
            {renderItems(items)}
        </div>
    );
};

export default List;
