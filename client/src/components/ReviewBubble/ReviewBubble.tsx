import React from 'react';
import {
  ReviewBubbleContainer,
  ReviewBubbleTitle,
  ReviewBubbleContent,
  ReviewBubbleDeleteICon,
} from './ReviewBubble.style';

interface ReviewBubbleProps {
  _id: string;
  title: string;
  content: string;
  onClick: (id: string) => void;
  icon?: React.ReactNode;
}

const ReviewBubble = ({ _id, title, content, onClick, icon = <ReviewBubbleDeleteICon /> }: ReviewBubbleProps) => {
  return (
    <ReviewBubbleContainer>
      <ReviewBubbleTitle>{title}</ReviewBubbleTitle>
      <ReviewBubbleContent>{content}</ReviewBubbleContent>
      {icon && <ReviewBubbleDeleteICon onClick={() => onClick(_id)} />}
    </ReviewBubbleContainer>
  );
};

export default ReviewBubble;
