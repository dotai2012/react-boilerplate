// import React, { Component } from 'react';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { notifyUser } from '../actions';
// import Notify from '../service/notify';


// class Auth extends Component {
//   state = {
//     email: '',
//     password: '',
//     action: 'login',
//   }

//   onChangeInput = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   onAuth = (e) => {
//     e.preventDefault();
//     const { firebase } = this.props;
//     const { email, password, action } = this.state;
//     if (action === 'login') {
//       firebase.login({ email, password }).catch((err) => { this.props.notifyUser(err.message, 'error'); });
//     } else {
//       firebase.createUser({ email, password }).catch((err) => { this.props.notifyUser(err.message, 'error'); });
//     }
//   }

//   onAuthFacebook = () => {
//     const { firebase } = this.props;
//     firebase.login({
//       provider: 'facebook',
//       type: 'redirect',
//     }).catch((err) => { this.props.notifyUser(err.message, 'error'); });
//   }

//   onAuthGoogle = () => {
//     const { firebase } = this.props;
//     firebase.login({
//       provider: 'google',
//       type: 'redirect',
//     }).catch((err) => { this.props.notifyUser(err.message, 'error'); });
//   }

//   render() {
//     return (
//       <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//         <div className="card card-signin my-5">
//           <div className="card-body">
//             <h5 className="card-title text-center">Sign In</h5>
//             <form className="form-signin" onSubmit={this.onAuth}>
//               <Notify message={this.props.notify.message} messageType={this.props.notify.messageType} />
//               <div className="form-label-group">
//                 <input onChange={this.onChangeInput} type="email" id="email" name="email" className="form-control" placeholder="Email address" required autoFocus />
//                 <label htmlFor="email">Email address</label>
//               </div>
//               <div className="form-label-group">
//                 <input onChange={this.onChangeInput} type="password" id="password" name="password" className="form-control" placeholder="Password" required />
//                 <label htmlFor="password">Password</label>
//               </div>
//               <div className="custom-control custom-checkbox mb-3">
//                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                 <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
//               </div>
//               <div className="center-btn">
//                 <button className="btn btn-lg btn-success text-uppercase" type="submit" onClick={() => this.setState({ action: 'login' })}>Sign In</button>
//                 <button className="btn btn-lg btn-primary text-uppercase" type="submit" onClick={() => this.setState({ action: 'register' })}>Sign Up</button>
//               </div>
//               <hr className="my-4" />
//             </form>
//             <form onSubmit={e => e.preventDefault()} className="form-signin">
//               <button onClick={this.onAuthGoogle} className="btn btn-lg btn-google btn-block text-uppercase"><i className="fab fa-google mr-2" /> Sign in with Google</button>
//               <button onClick={this.onAuthFacebook} className="btn btn-lg btn-facebook btn-block text-uppercase"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   notify: state.notify,
// });

// export default compose(
//   firestoreConnect(),
//   connect(mapStateToProps, { notifyUser }),
// )(Auth);
