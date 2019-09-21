import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import App from './components/app';
import reducers from './reducers';

const api = axios.create({
  baseURL: '/api',
});

const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({ api })));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);

// Firebase
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
// import { BrowserRouter } from 'react-router-dom';
// import firebase from 'firebase';
// import { reactReduxFirebase } from 'react-redux-firebase';
// import { reduxFirestore } from 'redux-firestore';

// import key from './config/key';
// import App from './components/app';
// import reducers from './reducers';

// const firebaseConfig = key.firebase;
// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true,
// };

// firebase.initializeApp(firebaseConfig);
// const settings = { timestampsInSnapshots: true };
// const firestore = firebase.firestore();
// firestore.settings(settings);

// const store = createStore(reducers, compose(
//   reactReduxFirebase(firebase, rrfConfig),
//   reduxFirestore(firebase),
//   applyMiddleware(reduxThunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// ));

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('#root'),
// );
