import React from 'react';
import "./Rating.css";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Rating = ({rating}) => {
    const starColor = {
        color: "#ffa41c"
    }

    function showStars(num){
        let floorNum = Math.floor(num);
        let ratingStars =  Array(floorNum).fill().map((_,i) => (<StarIcon style={starColor}/>))
        if( num > floorNum + 0.7 ) {
          ratingStars.push(<StarIcon style={starColor}/>)
        }
        if( num >= floorNum + 0.3 && num <= floorNum + 0.7 ) {
          ratingStars.push(<StarHalfIcon style={starColor}/>)
        }
        for( var i = ratingStars.length; i < 5; i++ ) {
          ratingStars.push(<StarBorderIcon style={starColor}/>)  
        }    
    return ratingStars
    }

    return (
        <div className="product__rating">
          {showStars(rating)}
          <span class="tooltiptext">{rating} out of 5 stars</span>
        </div>
    )
}

export default Rating
