import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  function showStars(num){
    let ratingStars =  Array(num).fill().map((_,i) => (<StarIcon style={{ color: "#FFD700" }}/>))
     for( var i = ratingStars.length; i < 5; i++) {
      ratingStars.push(<StarBorderIcon style={{ color: "#FFD700" }}/>)  
 }    
 return ratingStars
 }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {showStars(Array(rating).length)}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
