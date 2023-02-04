import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin : 20px;

`

const Button = styled.button`
    padding : 10px;
    border : none;


`

const Pagination = ({total, limit, page, setPage}) => {
    // 총 게시글 / 페이지당 게시글 수 올림 -> 필요한 페이지 수
    const numPages = Math.ceil( total / limit )

    return <>
        <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {/* arrayLength(numPages) 만큼의 빈 슬롯을 가지는 것 -> fill로 값을 채움 */}
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
}

export default Pagination;