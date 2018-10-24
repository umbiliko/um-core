

## Immutable Support
1. Use combineReducers from redux-immutable to create the root reducer.
import { combineReducers } from 'redux-immutable'
```js
...
const rootReducer = combineReducers({
  ...
})
...
```

2. Import ConnectedRouter, routerMiddleware, and connectRouter from connected-react-router/immutable instead of connected-react-router.
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router/immutable'

3. (Optional) Initialize state with Immutable.Map()
```js
import Immutable from 'immutable'
...
const initialState = Immutable.Map()
...
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  ...
)
```
