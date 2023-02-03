import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function UserInfo() {

    const [data, setData] = useState('');

    useEffect(() => {
      axios
      .get("http://localhost:8080/users/14")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error)
      })
    }, [])
  
  return (
    <>
    <div style = {{
    display : 'flex',
    justifyContent : 'center'
    }}>  
      <div  style = {{
        border : '1px solid black'
      }}>
        <h1 style = {{
          display : 'flex',
          justifyContent : 'center'
          }}>{`${JSON.stringify(data.name)}님 환영합니다!`}</h1>
        <div>
          <h2 style = {{
            border : '1px solid black'
          }}>
            {JSON.stringify(data.email)}
          </h2>
          <h2 style = {{
            border : '1px solid black'
          }}>
            {JSON.stringify(data.address)}
          </h2>
          <h2 style = {{
            border : '1px solid black'
          }}>
            {JSON.stringify(data.phoneNumber)}
          </h2>
        </div>
      </div>
    </div>
    {/* 회원 정보 수정 탈퇴 버튼 */}
    <div style = {{
          display : 'flex',
          justifyContent : 'center',
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
    </>
  );
}

export default UserInfo;