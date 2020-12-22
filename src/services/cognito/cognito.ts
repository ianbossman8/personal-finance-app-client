import {
  CognitoUserAttribute,
  CognitoUserPool,
  ISignUpResult
} from 'amazon-cognito-identity-js'
import configs from '../../configs/cognitos'
import { CognitoCallBack } from './types'
import { Credentials } from '../../types/auth'

class Service {
  private userPool: CognitoUserPool

  constructor(config: typeof configs) {
    this.userPool = new CognitoUserPool(config)
  }

  signUp(credentials: Credentials, cb: CognitoCallBack<ISignUpResult>) {
    const dataEmail = {
      Name: 'email',
      Value: credentials.email
    } as CognitoUserAttribute

    this.userPool.signUp(
      credentials.username,
      credentials.password,
      [dataEmail],
      null,
      cb
    )
  }
}

export default new Service(configs)
