import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// page and layout imports
import HomePage from "./pages/HomePage"
import SignUp from "./pages/AuthPages/SignUp"
import Login from "./pages/AuthPages/Login"
import Header from "./components/Header/Header"
import HomeHeader from "./components/Header/HomeHeader"
import CreateBlog from "./pages/BlogPages/CreateBlog"
import MyBlogs from "./pages/BlogPages/MyBlogs"
import BlogsDetails from "./pages/BlogPages/BlogDetails"
import Footer from "./components/Footer"
import About from "./pages/About"
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
              <Footer/>
            </Route>

            <Route path='/login'>
              <Header/>
              <Login />
              <Footer/>
            </Route>

            <Route path='/create'>
              <HomeHeader/>
              <CreateBlog/>
              <Footer/>
            </Route>

            <Route path='/myblogs'>
              <HomeHeader/>
              <MyBlogs/>
              <Footer/>
            </Route>

            <Route path='/about'>
              <HomeHeader/>
              <About/>
              <Footer/>
            </Route>
            <Route path='/details'>
              <HomeHeader/>
              <BlogsDetails/>
              <Footer/>
            </Route>

            <Route exact path='/'>
              <HomeHeader/>
              <HomePage />
              <Footer/>
            </Route>

          </Switch>
        </Theme>
      </AuthProvider>
    </Router>
  )
}

export default App
