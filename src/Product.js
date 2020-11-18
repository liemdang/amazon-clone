import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from "./Rating";

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
//   const starColor = {
//     color: "#ffa41c"
//   }
//   function showStars(num){
//     let floorNum = Math.floor(num);
//     let ratingStars =  Array(floorNum).fill().map((_,i) => (<StarIcon style={starColor}/>))
//     if( num > floorNum + 0.7 ) {
//       ratingStars.push(<StarIcon style={starColor}/>)
//     }
//     if( num >= floorNum + 0.3 && num <= floorNum + 0.7 ) {
//       ratingStars.push(<StarHalfIcon style={starColor}/>)
//     }
//      for( var i = ratingStars.length; i < 5; i++ ) {
//       ratingStars.push(<StarBorderIcon style={starColor}/>)  
//  }    
//  return ratingStars
//  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <Rating rating={rating}/>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
