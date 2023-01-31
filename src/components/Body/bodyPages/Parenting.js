import React from "react";
import styled from "styled-components";


const ListContainer = styled.div`
    display : flex;
    align-items : center;

`

const StyledListDiv = styled.div`
    flex : 1;
    background : gray;
    width : 200px;
    height : 200px;
    margin : 10px;
    
    `


function Parenting() {
    const listItems = ["출산1", "출산2", "출산3", "출산4", "출산5"];
      
    return <ListContainer>

        {listItems.map((listItem, index)=>{
        return <a href="/details"><StyledListDiv>{listItem}</StyledListDiv></a>

        })}

    </ListContainer>
    }

export default Parenting;