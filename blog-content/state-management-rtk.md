---
title: State Management RTK
date: "2022-03-29"
image: rtk.png
text: The official, opinionated, batteries-included toolset for efficient Redux development. Includes utilities to simplify common use cases.
isFeatured: false
id: 4
---

**Redux Toolkit**. Simple. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more. Opinionated.

## React with Redux Toolkit Snippet

```js
// create a slice
const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    orderCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    restockCake: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

// configure store
const store = configureStore({
  reducer: {
    cakeState: cakeReducer,
    iceCreamState: iceCreamReducer,
    userState: userReducer,
  },
});
```

RTK docs [here](https://redux-toolkit.js.org/)!
