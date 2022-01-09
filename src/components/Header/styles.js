import styled from "styled-components";

const Container = styled.div `
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    
    img {
        height: 51px;
        width: 51px;
        border-radius: 50px;
        
    }
`;

export {
    Container
}