# useContext Vs Redux:

useContext Redux

1. useContext is a hook. Redux is a state management library.

2. It is used to share data. It is used to manage data and state.

3. Changes are made with the Context
   value. Changes are made with pure functions i.e. reducers.

4. We can change the state in it. The state is read-only. We cannot change them directly.

5. It re-renders all components whenever
   there is any update in the provider’s
   value prop. It only re-render the updated components.

6. It is better to use with small
   applications. It is perfect for larger applications.

7. It is easy to understand and requires
   less code. It is quite complex to understand.

# Advantages of using redux toolkit over redux

Redux Toolkit was originally created to help address three common concerns about Redux:

1. "Configuring a Redux store is too complicated"
2. "I have to add a lot of packages to get Redux to do anything useful"
3. "Redux requires too much boilerplate code"

Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is beneficial to all Redux users regardless of skill level or experience

Redux Toolkit includes:

`configureStore()`: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

`createReducer()`: that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

`createAction()`: generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.

`createSlice()`: accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.

# Explain Dispatcher

import { useDispatch } from "react-redux";
const dispatch = useDispatch();

--- on click of add item we are dispatching an action addItem and sending the item info

const handleAddItem = (itemInfo) => {
dispatch(addItem(itemInfo));
};

# Explain reducer

Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.
import { createSlice } from "@reduxjs/toolkit";

const store = configureStore({
reducer: {
cart: cartSlice,
},
});

# Explain Slice

A slice is the portion of Redux code that relates to a specific set of data and actions within the store‘s state.

A slice reducer is the reducer responsible for handling actions and updating the data for a given slice. This allows for smaller reducer functions that focus on a slice of state.

const cartSlice = createSlice({
name: "cart",
initialState: {
items: [],
},
reducers: {
addItem: (state, action) => {
state.items.push(action.payload);
},
removeItem: (state, action) => {
state.items.pop();
},
clearCart: (state) => {
state.items = [];
},
},
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

# Explain Selector

A "selector" is any function that accepts the Redux state tree as an argument, and returns some extracted or derived data. That includes plain functions like you showed.

const cartItems = useSelector((store) => store.cart.items);
