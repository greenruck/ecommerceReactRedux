import React from "react";
import {useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import "./CartIcons.css";

/** Display add and remove cart symbols
 * 
 * gives add/remove action
 */

 function CartIcons({ id }) {
    const dispatch = useDispatch();
  
    function add(evt) { dispatch(addToCart(id)); }
    function remove(evt) { dispatch(removeFromCart(id)); }
  
    return (
      <div className="d-flex justify-content-between">
        <button
          onClick={add}
          className="btn btn-primary"
        >Add</button>
        <button
          onClick={remove}
          className="btn btn-secondary text-danger">
        Remove</button>
      </div>
    );
  }
  
  export default CartIcons;
  