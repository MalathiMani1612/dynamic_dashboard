// redux/actions.js

export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

// Action to add a widget
export const addWidget = (categoryId, widgetName, widgetText) => ({
  type: ADD_WIDGET,
  payload: {
    categoryId,
    widget: {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    }
  }
});

// Action to remove a widget
export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: {
    categoryId,
    widgetId
  }
});
