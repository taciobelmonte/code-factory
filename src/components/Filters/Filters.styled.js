import styled from 'styled-components';

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #eee;
    box-sizing: border-box;
    box-shadow: 0 0 1px #eee;
    outline: none;
`;

export const FiltersContainer = styled.div`
    label {
        font-size: 13px;;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    margin: 10px 20px 10px 10px;
    line-height: 2.4em;

    .full {
        width: 98%;
    }

    @media (min-width: 992px) {
        margin: 10px 20px 10px 10px;
        width: auto;
        float: left;

        .full {
            width: auto;
        }
    }
`;