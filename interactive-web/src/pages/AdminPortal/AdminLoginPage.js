import React, { useState } from 'react';
import './AdminLoginPage.css'
import { Form, Input, Button, Checkbox, Row, Col, message} from 'antd';
import {projectAuth} from '../../firebase/config';
import { Layout } from 'antd';
import NavigationBar from '../../component/NavigationBar';
import { Content } from 'antd/lib/layout/layout';
import FooterComponent from '../../component/FooterComponent';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { BlockOutlined } from '@ant-design/icons';

function AdminLoginPage() {

    const login = async (e) => {
        const email = document.getElementById("adminEmail").value
        const password = document.getElementById("adminPassword").value
        
        projectAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in   HERE YOU LINK TO ADMIN PORTAL
        const user = userCredential.user;
        console.log("You have signed in")
        console.log(email, password)
        message.success('Login Successfully!');
        //document.getElementById("error").innerHTML = "You have signed in"
        setTimeout(() => window.location.assign('/adminPortal'), 1000);//need to revise
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        message.error('Login failed. Please check your username and password.');
        //document.getElementById("error").innerHTML = errorMessage
        });
    }

   
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
    return (
       <Layout>
           <NavigationBar/>
           <Content>
            <Row  style = {{minHeight:"100vh"}} justify="space-around" align="middle">
                <Col span={24} align="middle">
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            name="Admin Login"
                            rules={[
                            {
                                required: false,
                            },
                            ]}
                        >
                            <a href="/adminLogin" style={{ color: '#1a3133', fontSize: '48px'}}> <BlockOutlined style={{color: '#1a3133', lineHeight: '64px', textAlign: 'center'}}/> ERC Inst. </a>
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" id="adminEmail"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            id="adminPassword"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={login} style={{backgroundColor: "#234144", borderColor: "#1a3133"}}>
                            Log in
                            </Button>
                            <p> </p>
                            <p id = "error" style={{fontWeight: "bold", color: "red"}}></p>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Content>
        <FooterComponent/>
    </Layout>
    )
}

export default AdminLoginPage
