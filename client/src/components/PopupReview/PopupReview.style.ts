import styled from 'styled-components';
import { AiOutlineClose, AiOutlineRight, AiOutlineQuestionCircle, AiFillFileText } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { StyledButton } from '../Button/Button.style';

export const Container = styled.div`
  margin: 10px 10px 10px 20px;
  display: flex;
  flex:1;
  position:relative;
  @media (max-width: 820px) {
    flex-direction: column;
  } ;
`;

export const PreviewAreaAndCommentBarContainer = styled.div`
  flex: 0.6;
  border-radius: 10px;
  width:60%;
  background: linear-gradient(72.2deg, #39454c 0%, #64757e 100%);
  border-radius: 20px 0px 0px 20px;
  text-align: center;
  @media (max-width: 820px) {
    border-radius: 20px 20px 0px 0px;
    padding: 10px 0px 20px 0px;
    width:100%;
  } ;
`;

export const NoReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.WhiteWithLargeOpacity};
  font-size:1.2rem;
`;

export const NoReviewsButton = styled.p`
  margin-top: 3px;
  text-decoration: underline;
  font-size:1.2rem;
  cursor: pointer; ;
 
`;
export const InstructionsContainer = styled.div`
  flex: 0.4;
  margin-right: 10px;
  border-radius: 0px 20px 20px 0px;
  background: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.DarkGray};
  padding: 20px;
  @media (max-width: 820px) {
    border-radius: 0px 0px 20px 20px;
    margin-right: 0px;
  } ;
`;

export const CloseIcon = styled(AiOutlineClose)`
position:absolute;
top:10px;
right:25px;
color: ${(props) => props.theme.colors.Black};
cursor: pointer;
font-size:2.2rem;
@media (max-width: 820px) {
  top:6px;
  right:10px;
  } ;
`
export const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'Assistant';
 
`;
export const ReviewsPopupTitleNumber = styled.span`
  color: ${(props) => props.theme.colors.Pink};
  font-size: 2.2rem;
`;

export const ContentContainer = styled.p`
  width: 70%;
  margin: 20px 0px;
  line-height: 18px;
  font-size: 1.4rem;
  font-family: 'Assistant';
`;

export const InstructionsButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.LightGray};
  color: ${(props) => props.theme.colors.DarkGray};
  font-size:1.8rem;
  /* background:orange; */
  `;

export const RightArrowIcon = styled(AiOutlineRight)`
 opacity:0.4;
 margin-right:10px;
 font-size:1.8rem;
`

export const InfoIcon = styled(AiOutlineQuestionCircle)`
 opacity:0.4;
 margin-right:10px;
 font-size:1.8rem;
`

export const ImportIcon = styled(AiFillFileText)`
 opacity:0.4;
 margin-right:10px;
 font-size:1.8rem;
`
export const AddIcon = styled(BiCommentAdd)`
 opacity:0.4;
 margin-right:10px;
 font-size:1.8rem;
`
export const InstructionsButtonInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Separator = styled.div`
  height: 1px;
  margin: 40px 0px 20px 0px;
  background: ${(props) => props.theme.colors.LightGray};
`;

export const ClearReviewsButton = styled(StyledButton)`
  justify-content: flex-start;
  margin-top: 40px;
  background: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.PrimaryRed};
  border:2px solid #Ffdddd;
`;

export const ClearReviewsIcon = styled(IoIosClose)`
 margin-right:10px;
 color: ${(props) => props.theme.colors.PrimaryRed};
 font-size:2.2rem;
`

export const SaveButton = styled(StyledButton) <{ disabled?: boolean }>`
  justify-content: center;
  background-color: ${(props) => (props.disabled ? props.theme.colors.Gray : props.theme.colors.Pink)};
 color: ${(props) => (props.disabled ? props.theme.colors.WhiteWithLargeOpacity : props.theme.colors.White)};
`;

