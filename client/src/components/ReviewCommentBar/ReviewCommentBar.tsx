import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { Review } from '../../models';

import {
  CommentBarContainer,
  ContainerTitle,
  TitleCharsAmountContainer,
  TitleCharAmountTotal,
  Separator,
  ContentContainer,
  Content,
  Title,
  AddButton,
} from './ReviewCommentBar.style';

interface ReviewCommentBarProps {
  maxCharLength?: number;
  reviews?: any;
  setReviews: (reviews: Review[]) => void;
}

const ReviewCommentBar = ({ reviews, setReviews, maxCharLength }: ReviewCommentBarProps) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [titleCharsAmount, setTitleCharsAmount] = useState<number>(title.length);

  useEffect(() => {
    setTitleCharsAmount(title.length);
  }, [title]);

  const handleAddReviewPress = async () => {
    const review = {
      title: title,
      content: content,
      _id: nanoid(),
    };
    setReviews([...reviews, review]);
    setTitle('');
    setContent('');
  };

  return (
    <CommentBarContainer CharsWereWritten={title.length > 0 && content.length > 0}>
      <ContainerTitle>
        <Title
          maxLength={maxCharLength}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter review title"
        />
        <TitleCharsAmountContainer>{titleCharsAmount}/
          <TitleCharAmountTotal CharsWereWritten={title.length > 0}>
            {maxCharLength}
          </TitleCharAmountTotal>
        </TitleCharsAmountContainer>
      </ContainerTitle>
      <Separator />
      <ContentContainer>
        <Content
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your review text..."
        />
        <AddButton disabled={title.length === 0 || content.length === 0} onClick={handleAddReviewPress}>
          Add
        </AddButton>
      </ContentContainer>
    </CommentBarContainer >
  );
};

export default ReviewCommentBar;
