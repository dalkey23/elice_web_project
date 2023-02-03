import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function UserInfo() {

    axios
    .get("http://localhost:8080/users/14")
    .then(alert('성공했습니다.'))
    .catch(alert('실패했습니다.'))
  
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>

        {/* 회원 정보 수정 탈퇴 버튼 */}
        <div style = {{
          display : 'flex',
          justifyContent : 'flex-end',
          padding : '10px'
        }}>
          <Button style = {{
                  borderWidth: '1px',
          }} variant="outline-dark">회원 정보 수정</Button>
          <Button style = {{
                  borderWidth: '1px',
                  margin: '0 0 0 10px'
          }} variant="outline-dark">주문 내역</Button>
          <Button style = {{
                  borderWidth: '1px',
                  margin: '0 0 0 10px'
          }} variant="outline-danger">회원 탈퇴</Button>
        </div>
      </Table>
    </div>
  );
}

export default UserInfo;