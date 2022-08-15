import styled from 'styled-components';

export const StyledLoader = styled.div`
    width: 8em;
    height: 8em;
    margin: 0 auto;
    border-radius:50%;
    font-size:0.5rem;
    border-top-color:linear-gradient(72.2deg,#39454c 0%,#64757e 100%);
    box-shadow: 1px 1px 10px blue;
    animation: spinner 1s linear infinite;
    @keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}
`