// 基本栗子和 exact 修饰符

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
//           <Route path='/login' component={Login}/>
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

// 登录调回

// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'
//
// const factAuth = {
//   isAuthenticated:false,
//   authenticate(){
//     this.isAuthenticated=true
//   }
// }
//
// const Home = () => <h3>首页</h3>
// const ShopCart = () => <h3>购物车</h3>
// const OrderList = () => <h3>订单列表</h3>
//
// class Login extends React.Component {
//   state = {
//     redirectToReferrer:false
//   }
//   login = () => {
//     factAuth.authenticate()
//     this.setState({
//       redirectToReferrer:true
//     })
//   }
//   render(){
//     const { redirectToReferrer } = this.state
//     const { from } = this.props.location.state
//     // console.log(this.props.location);
//     if(redirectToReferrer){
//       return(
//         <Redirect to={from}/>
//       )
//     }
//     return(
//       <div>
//         <button onClick={this.login}>登录</button>
//       </div>
//     )
//   }
// }
//
// const AuthButton = withRouter(() => (
//   factAuth.isAuthenticated ? (
//     <p>你好!</p>
//   ) : (
//     <p>尚未登录</p>
//   )
// ))
//
// const PrivateRoute = ({component:Component,...rest}) => (
//   <Route {...rest} render={(props)=>(
//     factAuth.isAuthenticated ? (
//       <Component/>
//     ) : (
//       <Redirect to={{
//         pathname:'/login',
//         state:{
//           from:props.location
//         }
//       }} />
//     )
//   )}/>
// )
//
// class App extends React.Component {
//   render(){
//     return(
//       <Router>
//         <div>
//           <AuthButton />
//           <ul>
//             <li><Link to='/home'>Home</Link></li>
//             <li><Link to='/cart'>ShopCart</Link></li>
//             <li><Link to='/login'>Login</Link></li>
//             <li><Link to='/order'>OrderList</Link></li>
//           </ul>
//           <Route path='/home' component={Home}/>
//           <Route path='/login' component={Login}/>
//           <PrivateRoute path='/cart' component={ShopCart}/>
//           <PrivateRoute path='/order' component={OrderList}/>
//         </div>
//       </Router>
//     )
//   }
// }
//
// export default App;

// url 参数

// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
//
// const Video = ({match}) => (
//   <h1>{match.params.id}</h1>
// )
//
// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/v/1-git">1-git</Link></li>
//         <li><Link to="/v/2-react">2-react</Link></li>
//       </ul>
//       <Route path='/v/:id' component={Video} />
//     </div>
//   </Router>
// )
//
// export default App;

// match.url 来实现嵌套 Link

// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
//
// const Home = () => (
//   <h1>Home</h1>
// )
// const Item = ({match}) => (
//   <h1>{match.params.item}</h1>
// )
// const About = ({match}) => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to={`${match.url}/me`}>aboutMe</Link></li>
//         <li><Link to={`${match.url}/work`}>aboutWork</Link></li>
//       </ul>
//       <Route path={`${match.url}/:item`} component={Item} />
//     </div>
//   </Router>
// )
//
// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/'>home</Link></li>
//         <li><Link to='/change'>about</Link></li>
//       </ul>
//       <Route exact path='/' component={Home} />
//       <Route path='/change' component={About} />
//     </div>
//   </Router>
// )
//
// export default App;

// No Match(404)

// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom'
//
// const Home = () => (
//   <h1>Home</h1>
// )
//
// const About = () => (
//   <h1>About</h1>
// )
//
// const NotFound = () => (
//   <h1>404</h1>
// )
//
// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       <Route path='/about' component={About}/>
//       <Route component={NotFound}/>
//     </Switch>
//   </Router>
// )
//
// export default App

// Switch

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Home = () => (
  <h1>Home</h1>
)

const About = () => (
  <h1>About</h1>
)

const User = ({match}) => (
  <h1>Hello,{match.params.user}</h1>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/liujinmeng'>User</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/:user' component={User}/>
      </Switch>
    </div>
  </Router>
)

export default App
