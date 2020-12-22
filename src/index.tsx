import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import configureStore from './store'
import { theme } from './style/theme'
import Auth from './routes/Auth/Auth'

const PageContainer = styled.div`
  color: ${(props) => props.theme.colors.main};
`

const storeInit = configureStore()

async function appStart() {
  ReactDOM.render(
    <React.StrictMode>
      <ReduxProvider store={storeInit}>
        <ThemeProvider theme={theme}>
          <PageContainer>Coming soon</PageContainer>
          <Auth />
        </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

appStart()
