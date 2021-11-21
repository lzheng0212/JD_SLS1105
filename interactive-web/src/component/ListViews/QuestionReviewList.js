import React, { useEffect } from "react";
import { List, Popconfirm, Space, Col, Button, Row, Layout, message} from 'antd';
import { projectFirestore } from "../../firebase/config";
import "./PostList.css";

export default function QuestionReviewList() {
    const [events, setEvents] = React.useState([]);

    useEffect(() => {
        projectFirestore.collection("CustomerQuestions").onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push(doc.data())
            })
            setEvents(documents)
        }) 
    }, [])

    const deleteQuestion = async (item) => {
        const email = item.email;
        await projectFirestore.collection("CustomerQuestions").doc(email).delete();
    }

    const postQuestion = async (e) => {
        var data = {
            Question: document.getElementById("question").value,
            Answer: document.getElementById("answer").value
        };
        await projectFirestore.collection("QuestionsOnFAQPage").add(data);
        message.success('Post Successfully!');
        document.getElementById("question").value = '';
        document.getElementById("answer").value = '';
    }

    return (
        <Layout>
            <input
                placeholder="Question"
                type="text"
                id="question"
                name="question"
                style={{ width: "100%" }}
            />
            <input
                placeholder="Answer"
                type="text"
                id="answer"
                name="answer"
                style={{ width: "100%" }}
            />
            <Button type="primary" onClick={postQuestion} style={{backgroundColor: "#234144", borderColor: "#1a3133"}}>
                Post It On FAQ
            </Button>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={events}
                style={{padding: '12px 24px 24px', backgroundColor: 'white'}}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.email}
                        extra={
                            <Space style={{marginLeft: '-8px'}}> 
                                
                                    <Row justify="end" align='middle' gutter={8}>
                                    <Col xs={0} sm={0} md={0} lg={12}>
                                        <Popconfirm
                                        cancelButtonProps={{type: 'primary'}}
                                        okType={{type: 'default'}}
                                        title="Are you sure to delete this question?"
                                        onConfirm={() => deleteQuestion(item)}
                                        onVisibleChange={() => console.log('Question deleted')}
                                        >
                                            <Button type="primary" danger style={{width: '80px'}}>
                                                DELETE
                                            </Button>
                                        </Popconfirm>
                                        
                                    </Col>
                                
                                </Row>
                            </Space>
                        }
                    >   
                        
                    <List.Item.Meta
                        title={item.question}
                        description={
                        <>
                            <span> Name: </span>{item.name} 
                            <p/>
                            <span> Email: </span>{item.email} 
                            <p/>
                        </>
                        }
                    />
                
                    </List.Item>

                )}
            />
        </Layout>
    )
    
}