// redux/reducers.js

import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

// Initial state with a sample category and widgets
const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 101, name: 'Widget 1', text: 'This is widget 1' },
        { id: 102, name: 'Widget 2', text: 'This is widget 2' }
      ]
    }
  ]
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
              }
            : category
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
