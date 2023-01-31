import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    display : flex;
    align-items : center;

`

const StyledListDiv = styled.div`
    flex : 1;
    background : powderblue;
    width : 200px;
    height : 200px;
    margin : 10px;
    `

function Living() {
    const listItems = ["생활1", "생활2"];

    return <ListContainer>

        {listItems.map((listItem, index) => {
            return <StyledListDiv>{listItem}</StyledListDiv>

        })}
    </ListContainer>
}

export default Living;