import { combineEpics } from 'redux-observable'
import { signUpEpic } from './auth'

const rootEpic = combineEpics(signUpEpic)
export default rootEpic
