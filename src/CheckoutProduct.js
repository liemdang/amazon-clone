import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
    function showStars(num){
    let floorNum = Math.floor(num);
    let ratingStars =  Array(floorNum).fill().map((_,i) => (<StarIcon style={{ color: "#ffa41c" }}/>))
    if( num > floorNum + 0.7 ) {
      ratingStars.push(<StarIcon style={{ color: "#ffa41c" }}/>)
    }
    if( num >= floorNum + 0.3 && num <= floorNum + 0.7 ) {
      ratingStars.push(<StarHalfIcon style={{ color: "#ffa41c" }}/>)
    }
     for( var i = ratingStars.length; i < 5; i++ ) {
      ratingStars.push(<StarBorderIcon style={{ color: "#ffa41c" }}/>)  
 }    
 return ratingStars
 }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {showStars(rating)}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
