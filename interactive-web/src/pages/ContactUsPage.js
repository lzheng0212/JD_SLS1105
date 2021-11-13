import React from 'react'
import NavigationBar from '../component/NavigationBar';
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import './ContactUsPage.css';
import emailPhoto from '../assets/emailPhoto.png';
import { Button } from "../component/Button";
import { projectFirestore } from "../firebase/config";
import { message } from 'antd';

export default function ContactUsPage() {


    //grab the data and send it off.

    const verifyFieldsNotEmpty = () => {
        const nameField = document.getElementsByClassName("ContactUsFormNameField")[0];
        const emailField = document.getElementsByClassName("ContactUsFormEmailField")[0];
        const questionField = document.getElementsByClassName("ContactUsFormQuestionField")[0];
        if (nameField.value === "" || emailField.value === "" || questionField.value === "") {
            message.warning('All fields must be filled in!');
        } else {
            sendQuestion(nameField.value, emailField.value, questionField.value);
            clearInputFields(nameField, emailField, questionField);
        }
    }

    const clearInputFields = (nameField, emailField, questionField) => {
        nameField.value = "";
        emailField.value = "";
        questionField.value = "";
    }

    const sendQuestion = (nameField, emailField, questionField) => {
        var data = {
            name: nameField,
            email: emailField,
            question: questionField
        };
        projectFirestore.collection("CustomerQuestions").add(data);
        message.success('Question sent!');
    }

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
                        <Button onClick={verifyFieldsNotEmpty}>
                            Submit
                        </Button>
                    </div>
                </div>

            </Content>
            <FooterComponent />
        </Layout >
    );
}