import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { signUp } from '../../actions/auth/actions'
import RootState from '../../reducers/types'

function authStateSelector(state: RootState) {
  return state.auth
}

function AuthForm(): JSX.Element {
  const dispatch = useDispatch()
  const authState = useSelector(authStateSelector)
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(signUp(values))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">User Name</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
      <p>{authState.error}</p>
    </form>
  )
}

export default AuthForm
