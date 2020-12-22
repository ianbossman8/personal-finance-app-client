import { Observable, of, scheduled, asyncScheduler } from 'rxjs'
import { map, catchError, switchMap, concatAll } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import Constants from '../actions/auth/constants'
import { signUpSuccess, signUpError, signingUp } from '../actions/auth/actions'
import {
  SignUpSuccessAction,
  SignUpErrorAction,
  SignUpAction,
  SigningUpAction
} from '../actions/auth/types'
import ActionTypes from '../actions/types'
import RootState from '../reducers/types'
import Dependencies from '../store/types'

export const signUpEpic: Epic<
  ActionTypes,
  SignUpSuccessAction | SignUpErrorAction | SigningUpAction,
  RootState,
  Dependencies
> = (action$, _, { cognitoService }) =>
  action$.pipe(
    ofType<SignUpAction>(Constants.SIGN_UP),
    switchMap((action) => {
      const signUp$ = new Observable<string>((subscriber) => {
        return cognitoService.signUp(action.payload, (err, res) => {
          if (err) {
            subscriber.error(err.message)
            return
          }

          subscriber.next(res.user.getUsername())
          subscriber.complete()
        })
      })

      function handleSuccess(username: string) {
        return signUpSuccess(username)
      }

      function handleError(errMessage: string) {
        return of(signUpError(errMessage))
      }

      return scheduled(
        [
          of(signingUp()),
          signUp$.pipe(map(handleSuccess), catchError(handleError))
        ],
        asyncScheduler
      ).pipe(concatAll())
    })
  )
