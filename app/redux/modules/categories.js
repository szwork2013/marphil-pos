export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_NEW_CATEGORY:
      return [];
    default:
      return state;
  }
}

export function addNewCategory(category) {
  return {
    type: ADD_NEW_CATEGORY,
    category
  };
}

