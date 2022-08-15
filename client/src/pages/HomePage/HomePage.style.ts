import styled from 'styled-components';

import { StyledButton } from '../../components/Button/Button.style';

export const ShowHidePopupButton = styled(StyledButton)`
    justify-content: center;
    margin: 20px auto;;
    color: ${(props) => props.theme.colors.Gold};
    background:linear-gradient(72.2deg,#39454c 0%,#64757e 100%);
    box-shadow: 1px 1px 10px blue;
    font-size:2.4rem;
    font-weight:bold;
`
