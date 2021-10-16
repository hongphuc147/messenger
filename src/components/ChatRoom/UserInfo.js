//Tạo các nút thông tin người dùng
import { Avatar, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
    display: flex;
    justyfy-content: space-between;
    padding: 12px 16px ;
    border-bottom:1px solid rgba(82, 38, 83);

    .username{
        color:white;
        margin-left: 5px;
        padding-right:2rem;
    }
`;

export default function UserInfo() {
    const {
      user: { displayName, photoURL },
    } = React.useContext(AuthContext);
    const { clearState } = React.useContext(AppContext);
  
    return (
      <WrapperStyled>
        <div>
          <Avatar src={photoURL}>
            {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Typography.Text className='username'>{displayName}</Typography.Text>
        </div>
        <Button
          ghost
          onClick={() => {
            // clear state in App Provider when logout
            clearState();
            auth.signOut();
          }}
        >
          Đăng xuất
        </Button>
      </WrapperStyled>
    );
  }