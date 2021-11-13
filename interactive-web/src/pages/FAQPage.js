import React, { useState, useEffect } from 'react'
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import NavigationBar from '../component/NavigationBar';
import { Content } from 'antd/lib/layout/layout';
import FAQBox from '../component/FAQBox';
import './FAQPage.css';
import { Button } from "../component/Button";
import { Link } from "react-router-dom";
import { projectFirestore } from '../firebase/config';

export default function FAQPage() {

    const [FAQItems, setFAQItems] = useState([]);

    useEffect(() => {
        projectFirestore.collection("QuestionsOnFAQPage").onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push(doc.data())
            })
            setFAQItems(documents)
        })
    }, [])

    return (
        <Layout>
            <NavigationBar />
            <Content>
                <div className="FAQ_QnA_Container">
                    <h1 className="FAQ_HEADER_NAME">Frequently Asked Questions (FAQ)</h1>
                    {FAQItems && FAQItems.map((FAQItem) => (
                        <FAQBox faqQuestion={FAQItem.Question} faqAnswer={FAQItem.Answer} />
                    ))}
                    <hr class="horizontalLine"></hr>
                    <div class="contactUs">
                        <h2>More Questions? Please Contact Us.</h2>
                        <Button>
                            <Link className="contactUsButtonLink" to={{ pathname: "./contactUs" }}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </Content>
            <FooterComponent />
        </Layout >
    );
}