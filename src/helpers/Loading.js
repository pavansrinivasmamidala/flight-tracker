import loading from "../assets/loading.gif";
import styled from "styled-components";

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`;

export const Loading = () => {
    return (
        <LoadingDiv >
            <img src={loading} alt="loading" />
        </LoadingDiv>
    )
}