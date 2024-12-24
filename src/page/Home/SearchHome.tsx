import styled from "styled-components";

const SearchWrapper = styled.div`
    width:540px;
    height:39.88px;
    border:2px solid black;
    border-radius:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Search = styled.input`
    width:500px;
    height:30px;
    border:0;

    &:focus {
        outline: none; 
`
function SearchBar(){
    return(
        <>
            <SearchWrapper>
                <Search type="text" placeholder="구인구직 찾아보기">

                </Search>
            </SearchWrapper>
        </>
    )
}

export default SearchBar;