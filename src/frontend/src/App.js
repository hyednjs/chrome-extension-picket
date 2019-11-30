/*global chrome*/
import React, { useState } from 'react';
import Login from './Login';
import Request from './Request';
import Cart from './Cart';
import { REFUSED } from 'dns';
import Review from './Review';

function App() {
  // chrome.tabs.getSelected(null, function (tab) {
  //   document.getElementById("url-input").value = tab.url;
  // });

  const [page, setPage] = useState('cart');

  function openRequest() {
    setPage('request');
  }
  function openCart() {
    setPage('cart');
  }
  function openReview() {
    setPage('review');
  }

  if (page === 'review') {
    return (
      <div className="App">
        <Review></Review>
      </div>
    )
  }
  if(page==='login'){
    return (
      <div className="App">
        <Login openCart={openCart}></Login>
      </div>
    )
  }
  if (page === 'cart') {
    return (
      <div className="App">
        <Cart openReview={openReview} openRequest={openRequest}></Cart>
      </div>
    )
  }
  if (page === 'request') {
    return (
      <div className="App">
        <Request></Request>
      </div>
    )
  }
}

export default App;
