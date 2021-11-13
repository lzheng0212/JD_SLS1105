import React from 'react'
import NavigationBar from '../component/NavigationBar';
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import './ContactUsPage.css';
import emailPhoto from '../assets/emailPhoto.png';
import { Button } from "../component/Button";

export default function ContactUsPage() {
    return (
        <Layout>
            <NavigationBar />
            <Content>
                <div className="ContactUsPageHeader">
                    <h1>SEND US A QUESTION</h1>
                </div>

                <div className="ContactUsImageAndFormContainer">
                    <div className="ContactUsImageLeft">
                        <img src={emailPhoto} />
                    </div>

                    <div className="ContactUsInputFormRight">
                        <input
                            className="ContactUsForm ContactUsFormNameField"
                            placeholder='Name'
                        />
                        <input
                            className="ContactUsForm ContactUsFormEmailField"
                            placeholder="What's your email?"
                        />
                        <textarea
                            className="ContactUsForm ContactUsFormQuestionField"
                            placeholder='Your questions...'
                        />
                        <Button>
                            Submit
                        </Button>
                    </div>
                </div>

            </Content>
            <FooterComponent />
        </Layout >
    );
}