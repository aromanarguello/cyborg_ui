import styled from 'styled-components';
const CardContainer = styled.div`
    width: 400px;
    height: 420px;
    box-shadow: 1px 2px 2px #607d8b;
    background: #ffff;
    display: inline-block;
    grid-row-start: 2;
    margin: 10px auto;
`;

const InnerCardContainer = styled.div`
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        margin-top: 40px;
    }
    .signInInput {
        margin: 20px auto;
        width: 200px;
    }
    .loginIcons {
        margin-right: 10px;
    }
`;

const SubmitRow = styled.div`
    width: inherit;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-right: 10px;
    padding-bottom: 40px;
`;

export { CardContainer, InnerCardContainer, SubmitRow}