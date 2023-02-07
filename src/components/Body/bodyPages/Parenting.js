import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { Link , useParams} from "react-router-dom";
import axios from "axios";

const ListContainer = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    & a {
        text-decoration : none;
        color : white;
        width : 25%;
        padding : 10px;
    }

`


const ListItems = styled.div`
    flex : 1;
    background : gray;
    width : 95%;
    height : 200px;
    margin : 10px;
    
`

const Item = styled.div`
   
`



function Parenting() {

    const [items, setItems] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:3000/products/all/9`)
        .then((response) => {
            setItems(response.data.searchAll)
        })
        .catch((error) => {
          alert(error)
        })
      }, [])
      
    
      
   
     

    // useState, useEffect 이용해서 게시글 불러와야 함
    // limit : 페이지당 게시물 수, page : 현재페이지 번호
    // const [ limit, setLimit ] = useState(8); -> 페이지당 게시글 수 사용자지정
    const limit = 8;
    const [ page, setPage ] = useState(1);
    //offset : 페이지의 첫 게시글 index
    const offset = (page - 1)*limit;


    return <><ListContainer>
        {/* slice : offset부터 offset+limit 인덱스까지의 값을 복사하여 반환 */}
        {items.slice(offset, offset+limit).map((listItem) => {
            return <Link to={`/itemInfo/${listItem.id}`}>
                        <ListItems>
                            <Item>{listItem.imgUrl}</Item>
                            <Item>{listItem.productName}</Item>
                            <Item>{listItem.id}</Item>
                            <Item>{listItem.price}</Item>
                        </ListItems>
                    </Link>

        })}
    </ListContainer>
    <Pagination
          total={items.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </>
}





export default Parenting;