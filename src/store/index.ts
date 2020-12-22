import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '../epics'
import rootReducer from '../reducers'
import RootState from '../reducers/types'
import cognitoService from '../services/cognito/cognito'
import ActionTypes from '../actions/types'

export const dependencies = {
  cognitoService
}

const epicMiddleware = createEpicMiddleware<
  ActionTypes,
  ActionTypes,
  RootState
>({
  dependencies
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
