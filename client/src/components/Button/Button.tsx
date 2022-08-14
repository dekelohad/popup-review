import { StyledButton } from './Button.style';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: any;
}

const Button = ({ children, disabled = false, onClick, ...rest }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
