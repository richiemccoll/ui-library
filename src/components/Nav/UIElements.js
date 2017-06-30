import styled from 'styled-components';

export const Container = styled.nav`
    background-color: ${props => props.color};
`;

export const NavButton = styled.button`
    background-color: ${props => props.color};
    border: none;
    margin: 8px;
`;

export const NavItems = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    text-align: center;
    text-transform: uppercase;
    color: white;
    padding: 8px;

    a {
        color: white;
    }
`;

export const Title = styled.span`
    align-self: center;
    text-transform: uppercase;
    padding-left: 16px;
`;