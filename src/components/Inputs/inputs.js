import styled from "styled-components";

export const    DivsInputs = styled.div`
    border: 0;
    border-radius: 16px;
    flex-direction: column;
    gap: 20px;
    display: flex;
    width: 1150px;
    input{
        width: 150px;
        border-radius: 10px;
        background-color: white;
        border: 0;
    }
    input[type="image"]{
        width: 150px;
    }
    textarea{
        width: 150px;
        border-radius: 10px;
        background-color: white;
        border: 0;
        padding: 10px;
        resize: vertical;
    }

    label{
        color: black;
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
    }
    
    button{
    background-color: #F2B929;
    padding: 15px 15px;
    height: 60px;
    width: 240px;
    border-radius: 35px;
    border: 0;
    color: white;
    font-size: 20px;
    font-weight: 700;
    }

    div{
        display: flex;
    }

    .arquivo::file-selector-button{
        height: 80px;
        border-radius: 10px;
        background-color: white;
        border: 0;
        transition: 1s;
    }
    .arquivo::file-selector-button:hover{
        background-color: #F2B929;
    }
`