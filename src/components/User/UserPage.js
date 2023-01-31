import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

function UserPage() {
  return (
    <Table striped bordered hover size="sm"
    style = {{
        width : '400px'
    }}>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>아이디</td>
          <td></td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td></td>
        </tr>
        <tr>
          <td>주소</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UserPage;