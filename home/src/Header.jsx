import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Observable } from 'windowed-observable';

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
  const handleNewMessage = (newMessage) => {
    console.log("from header new message: " + newMessage);
  };
  const observable = new Observable('messages');

  useEffect(() => {  
    observable.subscribe(handleNewMessage);
    return () => {
      observable.unsubscribe(handleNewMessage)
    }
  }, [handleNewMessage]);

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Fidget Spinner World aaaaaaaaaa</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
