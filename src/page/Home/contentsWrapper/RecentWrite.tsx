import styled from "styled-components";

const Text = styled.h1`
    font-family: 'Pretendard-Regular', sans-serif;
    margin:0;
    font-weight:regular;
    font-size:20px;
`

const Wrapper = styled.div`
    width:541px;
    height:236px;
    background-color:white;   
`


const WriteWrapper = styled.div`
    width:540px;
    height:200px;
    background-color:white;
    margin-top:15px;
    border-radius:15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

function RecentWrite(){
    return(
        <Wrapper>
            <Text>공지</Text>
            <WriteWrapper />
        </Wrapper>
    )
}

export default RecentWrite;