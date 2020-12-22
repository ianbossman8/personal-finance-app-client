import Constants from './constants'
import { Credentials } from '../../types/auth'

export interface SignUpSuccessAction {
  type: Constants.SIGN_UP_SUCCESS
  username: string
}

export interface SignUpErrorAction {
  type: Constants.SIGN_UP_ERROR
  error: string
}

export interface SignUpAction {
  type: Constants.SIGN_UP
  payload: Credentials
}

export interface SigningUpAction {
  type: Constants.SIGNING_UP
}

export interface ConfirmRegistrationAction {
  type: Constants.CONFIRM_REGISTRATION
}

type ActionTypes =
  | SignUpSuccessAction
  | SignUpAction
  | SigningUpAction
  | SignUpErrorAction
  | ConfirmRegistrationAction
export default ActionTypes
