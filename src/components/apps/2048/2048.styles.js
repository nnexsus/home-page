import styled from "styled-components";

export const Grid = styled.div`
    width: 400px;
    height: 400px;
    background: blue;
    display: flex;
    flex-wrap: wrap;

    div {
        width: 100px;
        height: 100px;
        background: lightblue;
    }

`;

export const Wrapper = styled.div`
    font-size: 16px;
    text-align: center;
    font-weight: bold;

    #board {
        width: 400px;
        height: 400px;

        background-color: #cdc1b5;
        border: 6px solid #bbada0;

        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    #overScreen {
        display: none;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .tile {
        width: 90px;
        height: 90px;
        border: 5px solid #bbada0;

        font-size: 40px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* colored tiles */

    .x2 {
        background-color: #eee4da;
        color: #727371;
    }

    .x4 {
        background-color: #ece0ca;
        color: #727371;
    }

    .x8 {
        background-color: #f4b17a;
        color: white;
    }

    .x16{
        background-color: #f59575;
        color: white;
    }

    .x32{
        background-color: #f57c5f;
        color: white;
    }

    .x64{
        background-color: #f65d3b;
        color: white;
    }

    .x128{
        background-color: #edce71;
        color: white;
    }

    .x256{
        background-color: #edcc63;
        color: white;
    }

    .x512{
        background-color: #edc651;
        color: white;
    }

    .x1024{
        background-color: #eec744;
        color: white;
    }

    .x2048{
        background-color: #ecc230;
        color: white;
    }

    .x4096 {
        background-color: #fe3d3d;
        color: white;
    }

    .x8192 {
        background-color: #ff2020;
        color: white;
    }
`;