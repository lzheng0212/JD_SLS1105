import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import { Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, BlockOutlined } from '@ant-design/icons';

import './NavigationBar.css';
import './Logo.css';
import Logo from './Logo';

import { Button } from './Button';
import {projectAuth} from '../firebase/config';
import { Header } from 'antd/lib/layout/layout';

const { SubMenu } = Menu;

export default function NavigationBar() {

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  useEffect(() => {
    showButton();
  }, []);

  const checkStatus = async (e) => {
    projectAuth.onAuthStateChanged(function(user) {
      if (user) {
        window.location.assign('/adminPortal') //need to revise  if user loged in
      } else {
        window.location.assign('/adminLogin') //need to revise   if not
      }
    });
  }

  
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
    


    // <div className="navigationBar">
    //   <a href = "/home"><Logo></Logo></a>
    //   <div className="tabRoulette">
    //     <a href='/post' style={{color: '#bdbdbd', textDecoration:'none'}} className="tab">
    //       Posts
    //     </a>
    //     <element className="tab">
    //       <p>
    //         Map
    //       </p>
    //     </element>
    //     <element className="tab">
    //       <p>
    //         Timeline
    //       </p>
    //     </element>
    //     <element className="tab">
    //       <p>
    //       <a href='/events' style={{color: '#bdbdbd', textDecoration:'none'}}>Events</a>
    //       </p>
    //     </element>
    //     <element className="tab">
    //       <p>
    //         FAQ
    //       </p>
    //     </element>
    //     <element className="adminButton-container">
    //       {button && <Button buttonStyle='btn--round' buttonSize="btn--large" onClick={checkStatus}>Admin</Button>}
    //     </element>
    //   </div>
    //   <div className='orgRoulette'>
    //     <element className="tab">
    //       <p>
    //         <a href='/aboutUs' style={{color: '#bdbdbd', textDecoration:'none'}}>About Us</a>
    //       </p>
    //     </element>
    //     <element className="donateButton-container">
    //       {button && <Button buttonStyle='btn--round' buttonSize="btn--large" path='/donate'>Donate</Button>}
    //     </element>
    //   </div>
    // </div>
  );
}
