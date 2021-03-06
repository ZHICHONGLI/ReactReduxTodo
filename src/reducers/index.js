/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import reducer from './reducer';

const initialState = {
//  newItemId: 2,
  items: [
    {
      id: 1,
      detail: 'first task',
      completed: false
    }
  ]
};

const item = (state = {}, action) => {
    switch(action.type){
        case "ADD_ITEM":
        return {
            id: action.id,
            detail: action.payload,
            completed: false
        }
        case "DO_ITEM":
        if(state.id !== action.id){
            return state
        }
        return Object.assign({}, state, {
            completed: !state.completed
        })
        default:
            return state
    }
};

const items = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
          let newItems = [
            ...state.items,
            item(undefined, action)
        ];
          let newState = Object.assign({}, state, items : newItems);
        return newState;
        case 'DO_ITEM':
        return state.items.map(t => item(t, action))
        default:
        return state
    }
};

// the combineReducers should be an object
const combined = combineReducers({
 Busket: reducer
});
// module.exports = combined;
export default combined;
