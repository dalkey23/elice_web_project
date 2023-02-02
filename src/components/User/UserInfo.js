import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function UserInfo() {
  return (
  <div style = {{
    padding : '100px',
    display : 'flex',
    justifyContent : 'center'
  }}>  
    <Table bordered style = {{
        width : '400px'
    }}>
      <thead>
        <tr>
          <th>이름</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>아이디</td>
        </tr>
        <tr>
          <td>전화번호</td>
        </tr>
        <tr>
          <td>주소</td>
        </tr>
      </tbody>
        {/* 회원 정보 수정 탈퇴 버튼 */}
        <div style = {{
          display : 'flex',
          justifyContent : 'space-between',
          padding : '10px'
        }}>
          <Button style = {{
                  borderWidth: '1px',
          }} variant="outline-dark">회원 정보 수정</Button>
          <Button style = {{
                  borderWidth: '1px'
          }} variant="outline-danger">회원 탈퇴</Button>
        </div>
      </Table>
    </div>
  );
}

export default UserInfo;