import React from 'react'
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import NavigationBar from '../component/NavigationBar';
import { Content } from 'antd/lib/layout/layout';
import FAQBox from '../component/FAQBox';
import './FAQPage.css';

export default function FAQPage() {
    // query firebase for faq questions. For each it will pass the Q and A to the FAQBox.
    return (
        <Layout>
            <NavigationBar />
            <Content>
                <div className="FAQ_QnA_Container">
                    <h1 className="FAQ_HEADER_NAME">Frequently Asked Questions (FAQ)</h1>
                    <FAQBox />
                    <FAQBox />
                    <FAQBox />
                    <FAQBox />
                    <FAQBox />
                    <hr class="horizontalLine"></hr>
                    <div class="contactUs">
                        <h2>More Questions? Please Contact Us.</h2>
                        <h3>(Button later)</h3>
                    </div>
                </div>
            </Content>
            <FooterComponent />
        </Layout >
    );
}