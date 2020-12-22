export interface CognitoCallBack<T> {
  (err: Error, res: T): void
}
