import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// page and layout imports
import HomePage from "./pages/HomePage"
import SignUp from "./pages/AuthPages/SignUp"
import Login from "./pages/AuthPages/Login"
import Theme from "./styles/theme"
import Footer from "./components/Footer/Footer"

import { AuthProvider } from "./context/AuthContext"
import Header from "./components/Header/Header"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <Switch>
            <Route path='/signup'>
              <Header />
              <SignUp />
            </Route>
            <Route path='/login'>
              <Header />
              <Login />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </Theme>
      </AuthProvider>
    </Router>
  )
}

export default App
