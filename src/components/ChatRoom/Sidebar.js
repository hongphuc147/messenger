import React from "react";
import {Row, Col} from 'antd';
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";

const SidebarStyled = styled.div`
    background: #2d8659;
    color:white;
    height:100vh;
`;

export default function Sidebar() {
    return (
    <SidebarStyled>
    <Row>
        <Col span={24}><UserInfo/></Col>
        <Col span={24}><RoomList/></Col>
    </Row>
    </SidebarStyled>
        );
}