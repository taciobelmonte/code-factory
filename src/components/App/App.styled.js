import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Roboto", sans-serif;
`;

export const Products = styled.div`
    margin: 30px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    clear: both;

    @media (min-width: 767px) {
        flex-direction: row;
    }
`;

export const NoResults = styled.p`
    margin: 20px 12px;
`;