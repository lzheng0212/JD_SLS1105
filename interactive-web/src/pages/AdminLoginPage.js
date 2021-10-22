import React, { useState } from 'react';
import './AdminLoginPage.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col} from 'antd';
import {projectAuth} from '../firebase/config';
import AdminPortal from './AdminPortal';
import { Layout } from 'antd';
import NavigationBar from '../component/NavigationBar';
import { Content } from 'antd/lib/layout/layout';
import FooterComponent from '../component/FooterComponent';
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
        document.getElementById("error").innerHTML = "You have signed in"
        window.location.assign('/adminportal') //need to revise
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        document.getElementById("error").innerHTML = errorMessage
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
                {/* <div class = "admin-center">
                    <h1 class = "admin-h1">Admin login</h1>
                    <b>Enter admin email and password</b>
                    <br/><br/>
                    <div class = "admin-container">
                        <div>
                            <label for="email" class = "admin-label">email</label>
                            <input type="text" id="adminEmail" name="adminEmail" class = "admin-label"></input>
                        </div>
                        <div>
                            <label for="password" class = "admin-label">password</label>
                            <input type="password" id="adminPassword" name="adminPassword" class = "admin-label"></input>
                        </div>
                        <button class = "admin-button" onClick={login}>Login</button>
                        <p id = "error"></p>
                    </div>
                </div> */}
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
                        {/* <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item> */}

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
