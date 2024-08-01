import React from 'react';
import AppList from '@crema/components/AppList';
import { Divider } from 'antd';
import { StyledProductDetailItemTitle } from '../index.styled';

type ReviewsType = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type ReviewsProps = {
  reviews?: ReviewsType[]; 
};


const Reviews = ({ reviews  } : ReviewsType | any ) => {
  console.log(reviews);
  const ReviewsItem = ({reviews} ) => {
    console.log(reviews)
 

     return (
      <div>
        <p>User: {reviews.title}</p>
        <p>Rating: {reviews.rating}</p>
        <p>Comment: {reviews.comment}</p>
        <p>Created At: {reviews.createdAt} </p>
      </div>
    );
  };

  return (
    <div>
      <StyledProductDetailItemTitle>Reviews</StyledProductDetailItemTitle>
      <Divider style={{ marginTop: 15, marginBottom: 15  }} />
      <AppList
        data={[reviews]}
        renderItem={(reviews: ReviewsType | any) => {
          console.log(reviews) 
          return<ReviewsItem key={reviews.id} reviews={reviews} />
        }}
      />
    </div>
  );
};
export default Reviews;
