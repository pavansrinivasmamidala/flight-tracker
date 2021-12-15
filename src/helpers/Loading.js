import loading from "../assets/loading.gif";
import styled from "styled-components";
import glow from '../assets/glow.gif';

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`;

const SmallLoadingDiv = styled.div`
    height:30px;
    width:30px;
`;
export const Loading = () => {
    return (
        <LoadingDiv >
            <img src={loading} alt="loading" />
        </LoadingDiv>
    )
}

export const DataLoading = () => {
    return (
        <SmallLoadingDiv>
            <img src={glow} alt="loading"/>
        </SmallLoadingDiv>
    )
}