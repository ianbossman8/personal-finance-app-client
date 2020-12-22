import Constants from './constants'
import {
  SignUpAction,
  SignUpSuccessAction,
  SignUpErrorAction,
  SigningUpAction
} from './types'
import { Credentials } from '../../types/auth'

export function signUp(credentials: Credentials): SignUpAction {
  return {
    type: Constants.SIGN_UP,
    payload: credentials
  }
}

export function signingUp(): SigningUpAction {
  return {
    type: Constants.SIGNING_UP
  }
}

export function signUpSuccess(username: string): SignUpSuccessAction {
  return {
    type: Constants.SIGN_UP_SUCCESS,
    username
  }
}

export function signUpError(error: string): SignUpErrorAction {
  return {
    type: Constants.SIGN_UP_ERROR,
    error
  }
}
