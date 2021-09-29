import React from 'react';
import "antd/dist/antd.css";
import { Menu, Row, Col } from 'antd';
import { BlockOutlined } from '@ant-design/icons';

import './NavigationBar.css';
import './Logo.css';

import { Header } from 'antd/lib/layout/layout';

//const { SubMenu } = Menu;

export default function NavigationBar() {

  return (
    <Header style = {{backgroundColor: '#1a3133'}}>
      <Row justify="start" align="center" gutter="0px" style={{height: '64px'}} >  
        <Col wrap="false" xs={24} sm={24} md={6} lg={6} xl={5} xxl={4} >
          <h2  style= {{color: 'white', lineHeight: '64px', textAlign: 'center', whiteSpace: 'nowrap', fontSize: '24px'}}>
            <a href="/home" style={{ color: 'white'}}> <BlockOutlined style={{color: 'white', lineHeight: '64px', textAlign: 'center'}}/> ERC Inst. </a>
          </h2>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={19} xxl={20} className="menugrid">
          <Menu mode = {"horizontal"}
              theme='dark'>
            <Menu.Item key="post">
              <a href="/home" rel="noopener noreferrer">
                Home
              </a>
            </Menu.Item>
            <Menu.Item key="map">
              <a href="/map" rel="noopener noreferrer">
                Map
              </a>
            </Menu.Item>
            <Menu.Item key="timeline">
              <a href="/timeline" rel="noopener noreferrer">
                Timeline
              </a>
            </Menu.Item>
            <Menu.Item key="events">
              <a href="/events" rel="noopener noreferrer">
                Events
              </a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/aboutUS" rel="noopener noreferrer">
                About
              </a>
            </Menu.Item>
            <Menu.Item key="donate">
              <a href="/donate" rel="noopener noreferrer">
                Donate
              </a>
            </Menu.Item>
            <Menu.Item key="admin">
              <a href="/adminportal" rel="noopener noreferrer">
                Admin
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}
