import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ReviewBubbleContainer = styled.div`
  margin: 10px 36.5px;
  padding: 10px 30px 12px 15px;
  word-wrap: break-word;
  position: relative;
  text-align: left;
  border-radius: 10px 10px 10px 2px;
  background-color: ${(props) => props.theme.colors.WhiteWithSmallOpacity};
  color: ${(props) => props.theme.colors.LightGray};

  &:hover   {
    background-color: ${(props) => props.theme.colors.WhiteWithMediumOpacity};
  }
`;

export const ReviewBubbleTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ReviewBubbleContent = styled.p`
  margin-top: 10px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.WhiteWithLargeOpacity};
  ${ReviewBubbleContainer}:hover & {
    color: ${(props) => props.theme.colors.White};
  }
`;

export const ReviewBubbleDeleteICon = styled(AiFillCloseCircle)`
  display:none;
  position: absolute;
  top: -6px;
  right: -6px;
  font-size: 2.4rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.PrimaryRed};
  ${ReviewBubbleContainer}:hover & {
    display:block;
  }
`;
