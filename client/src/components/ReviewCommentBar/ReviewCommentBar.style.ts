import styled from 'styled-components';
import { StyledButton } from '../Button/Button.style';

export const CommentBarContainer = styled.div<{ CharsWereWritten?: boolean }>`
  margin: 20px;
  padding-bottom: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.White};
  box-shadow: ${(props) => (props.CharsWereWritten ? '0px 5px 20px rgba(0, 0, 0, 0.5)' : '0px 5px 20px rgba(0, 0, 0, 0.25)')};
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding: 18px 20px 0px 10px;
  border-radius: 10px;
`;

export const Title = styled.input`
  border: none;
  outline: none;
  font-size:1.4rem;
  font-weight: bold;
  color:${(props) => props.theme.colors.PlaceholderGray};
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.SecondaryGray};
  }
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: ${(props) => props.theme.colors.SecondaryGray};
}
::-ms-input-placeholder { /* Microsoft Edge */
color: ${(props) => props.theme.colors.SecondaryGray};
}
`;
export const TitleCharsAmountContainer = styled.div`
   font-size:1.4rem;
   font-weight: 400;
   display:flex;
  align-items:center;
  color:green;
   color: ${(props) => props.theme.colors.DarkGray};
  `;

export const TitleCharAmountTotal = styled.p<{ CharsWereWritten?: boolean }>`
  color: ${(props) => props.CharsWereWritten && props.theme.colors.SecondaryGray};
  margin-left: 1px;
  font-size:1.4rem;
  `;

export const Separator = styled.div`
  height: 1px;
  margin: 15px 35px 0px 26px;
  background-color: ${(props) => props.theme.colors.LightGray};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding: 0px 15px 0px 10px;
`;


export const Content = styled.input`
  flex: 1;
  word-wrap: break-word;
  width: 300px;
  border: none;
  outline: none;
  font-size:1.4rem;
  color:${(props) => props.theme.colors.PlaceholderGray};
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.SecondaryGray};
  }
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: ${(props) => props.theme.colors.SecondaryGray};
}
::-ms-input-placeholder { /* Microsoft Edge */
color: ${(props) => props.theme.colors.SecondaryGray};
}
`;

export const AddButton = styled(StyledButton) <{ disabled?: boolean }>`
  justify-content: center;
  width: 64px;
  font-size:1.4rem;
  background-color: ${(props) => props.disabled ? props.theme.colors.PrimaryGray : props.theme.colors.Pink};
  color: ${(props) => props.disabled ? props.theme.colors.WhiteWithSmallOpacity : props.theme.colors.White};

`;


