import styled from "styled-components";
import { Link } from "@reach/router";

const NavivagtionBar = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    z-index: 2;
`;

const A = styled(Link)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
`;

export {
    A,
    NavivagtionBar,
};