import React from 'react'
import ReactDOM from 'react-dom'
import './public/index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))

class App extends React.Component {
  state = {
    theme: 'dark',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'dark' ? 'light' : 'dark'
      }))
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route 
                    exact
                    path='/'
                    render={() => <Posts type='top' />}
                  />
                  <Route
                    path='/new'
                    render={() => <Posts type='new' />}
                  />
                  <Route
                    path='/best'
                    render={() => <Posts type='best' />}
                  />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)