import React, { useState, useEffect } from "react";
import { List, Popconfirm, Space, Tag, Col, Button, Row, Input, Radio, message, Layout } from 'antd';
import { Link } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./PostList.css";
import { format } from "date-fns";

export default function TimelineList(props) {

    const [items, setItems] = React.useState([]);

    const successDel = () => {
        message.success('Successfully delete the post!');
    };


    useEffect(() => {

        projectFirestore.collection("timeline").orderBy("date", "desc").onSnapshot(snapshot => {
            let item = [];
    
            snapshot.forEach(doc =>
              item.push({ 
                date: doc.data().date.toDate(),
                content: doc.data().content,
                title: doc.data().title,
                id: doc.id,
               }),
            );
    
            setItems(item)
          });
    }, [])



    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const colorList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    var seed = Math.floor(Math.random() * 10);

        return (
            <Layout>
            <Button type="primary" style={{backgroundColor: "#234144", borderColor: "#1a3133"}}>
                <Link to={{ pathname: "./addtimelineeventpage", state: {update: false}}}>
                Create New Timeline Event                 
                </Link> 
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
                dataSource={items}
                style={{padding: '12px 24px 24px', backgroundColor: 'white'}}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <Space style={{marginLeft: '-8px'}}> 
                                
                                 <Row justify="end" align='middle' gutter={8}>
                                    <Col xs={0} sm={0} md={0} lg={12}> 
                                        <Button style={{width: '80px'}}>
                                            <Link
                                                to={{ pathname: "./addtimelineeventpage", state:
                                                    {   
                                                        update: true,
                                                        title: item.title,
                                                        content: item.content,
                                                        id: item.id,
                                                        date: item.date
                                                    } 
                                                }}
                                            >
                                                Edit
                                            </Link> 
                                        </Button>
                                    </Col>
                                    <Col xs={0} sm={0} md={0} lg={12}>
                                        <Popconfirm
                                        cancelButtonProps={{type: 'primary'}}
                                        okType={{type: 'default'}}
                                        title="Are you sure to delete this timeline event?"
                                        onConfirm={() => {
                                            const res = projectFirestore
                                            .collection("timeline")
                                            .doc(item.id)
                                            .delete();
                                            successDel();
                                        }}
                                        onVisibleChange={() => console.log('Timeline Event deleted')}
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
                        title={<a>{item.title}</a>}
                        description={
                        <>
                            <span style={{color: "#66806A"}}> Date: {format(item.date, "yyyy-MM-dd")}</span>
                            <p>
                            <span> {`${item.content.substring(0, 230)}...`}</span>
                            </p>
                            
                        </>
                        }
                    />

                    <Row justify="start" align='middle' gutter={8}>
                        <Col lg={0} xl={0} xxl={0}> 
                            <Button style={{width: '80px'}}>
                                <Link
                                    to={{ pathname: "./create/event", state:
                                        {   
                                            update: true,
                                            title: item.title,
                                            content: item.content,
                                            categories: item.categories,
                                            startTime: item.startTime,
                                            endTime: item.endTime,
                                            location: item.location,
                                        } 
                                    }}
                                >
                                    Edit
                                </Link> 
                            </Button>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={0} xl={0} xxl={0}>
                            
                            <Popconfirm
                            cancelButtonProps={{type: 'primary'}}
                            okType={{type: 'default'}}
                            onConfirm={() => {
                                const res = projectFirestore
                                .collection("timeline")
                                .doc(item.id)
                                .delete();
                                successDel();
                            }}
                            onVisibleChange={() => console.log('Timeline Event deleted')}
                            >
                                <Button type="primary" danger style={{width: '80px'}}>
                                    DELETE
                                </Button>
                            </Popconfirm>
                        </Col>
                    </Row>
                        

                    </List.Item>
    
                )}
            />
            </Layout>
        )
    
}