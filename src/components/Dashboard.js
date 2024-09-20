import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../redux/actions'; // Import actions

const Dashboard = () => {
  const categories = useSelector(state => state.categories); // Get categories from Redux store
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId) => {
    const widgetName = prompt('Enter Widget Name:');
    const widgetText = prompt('Enter Widget Text:');
    if (widgetName && widgetText) {
      dispatch(addWidget(categoryId, widgetName, widgetText)); // Dispatch addWidget action
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId)); // Dispatch removeWidget action
  };

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          {category.widgets.map(widget => (
            <div key={widget.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{widget.name}</h3>
              <p>{widget.text}</p>
              <button onClick={() => handleRemoveWidget(category.id, widget.id)}>Remove Widget</button>
            </div>
          ))}
          <button onClick={() => handleAddWidget(category.id)}>+ Add Widget</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
