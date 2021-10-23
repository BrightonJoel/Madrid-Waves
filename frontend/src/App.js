import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// page and layout imports
import HomePage from "./pages/HomePage"
import SignUp from "./pages/AuthPages/SignUp"
import Login from "./pages/AuthPages/Login"
import Header from "./components/Header/Header"
import HomeHeader from "./components/Header/HomeHeader"
import Theme from "./styles/theme"

import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <Switch>
            <Route path='/signup'>
              <Header/>
              <SignUp />
            </Route>
            <Route path='/login'>
              <Header/>
              <Login />
            </Route>
            <Route exact path='/'>
              <HomeHeader/>
              <HomePage />
            </Route>
          </Switch>
        </Theme>
      </AuthProvider>
    </Router>
  )
}

export default App
