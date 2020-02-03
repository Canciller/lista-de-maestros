import styled from 'styled-components';

export default styled.div`
    margin: 0 auto;
    width: 80%;
    height: 0.5px;
    border-radius: 50%;
    background: ${props => props.theme.sidebar.separator.background};
`;
