import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 45px;
  margin-top: 10px;
  padding: 10px 10px 11px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => (props.disabled ? props.theme.colors.LightGray : props.theme.colors.Pink)};
  color: ${(props) => (props.disabled ? props.theme.colors.DarkGray : props.theme.colors.White)};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  };
`;
