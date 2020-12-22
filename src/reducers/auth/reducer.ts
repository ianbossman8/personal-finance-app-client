import { Reducer } from 'react'
import Constant from '../../actions/auth/constants'
import State from './types'
import ActionTypes from '../../actions/types'

const initialState: State = {
  error: '',
  user: undefined,
  signingUp: false
}

const reducer: Reducer<State, ActionTypes> = (
  state: State = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case Constant.SIGNING_UP:
      return {
        error: '',
        user: undefined,
        signingUp: true
      }
    case Constant.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.error,
        signingUp: false
      }
    case Constant.SIGN_UP_SUCCESS:
      return {
        error: '',
        user: action.username,
        signingUp: false
      }
    case Constant.CONFIRM_REGISTRATION:
    default:
      return state
  }
}

export default reducer
