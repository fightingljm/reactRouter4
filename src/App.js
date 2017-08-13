// import React from 'react';
// import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
//
// import Home from './pages/Home.js'
// import About from './pages/About.js'
// import Login from './pages/Login.js'
//
// class App extends React.Component {
//   render() {
//     let loggedIn = false
//     return (
//       <Router>
//         <div>
//           <Link to='/'>Home</Link>
//           <Link to='/about'>About</Link>
//           <Link to='/login'>Login</Link>
//           <Route exact path='/' component={Home}/>
//           <Route exact path='/login' component={Login}/>
//           <Route path='/about' render={()=>(
//             loggedIn ? (
//               <About/>
//             ) : (
//               <Redirect to='/login'/>
//             )
//           )}/>
//         </div>
//       </Router>
//     );
//   }
// }
//
// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const factAuth = {
  isAuthenticated:false,
  authenticate(){
    this.isAuthenticated=true
  }
}

const Home = () => <h3>首页</h3>
const ShopCart = () => <h3>购物车</h3>
const OrderList = () => <h3>订单列表</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer:false
  }
  login = () => {
    factAuth.authenticate()
    this.setState({
      redirectToReferrer:true
    })
  }
  render(){
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state
    // console.log(this.props.location);
    if(redirectToReferrer){
      return(
        <Redirect to={from}/>
      )
    }
    return(
      <div>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}

const AuthButton = withRouter(() => (
  factAuth.isAuthenticated ? (
    <p>你好!</p>
  ) : (
    <p>尚未登录</p>
  )
))

const PrivateRoute = ({component:Component,...rest}) => (
  <Route {...rest} render={(props)=>(
    factAuth.isAuthenticated ? (
      <Component/>
    ) : (
      <Redirect to={{
        pathname:'/login',
        state:{
          from:props.location
        }
      }} />
    )
  )}/>
)

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/cart'>ShopCart</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/order'>OrderList</Link></li>
          </ul>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/cart' component={ShopCart}/>
          <PrivateRoute path='/order' component={OrderList}/>
        </div>
      </Router>
    )
  }
}

export default App;
