import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
export const RootReducer = combineReducers({
	  // add reducers here
	user: userReducer,
	categories: categoriesReducer,
});