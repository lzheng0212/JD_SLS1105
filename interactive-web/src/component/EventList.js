import React, { useState, useEffect } from "react";
import { List, Popconfirm, Space, Tag, Image, Col, Button, Row, Input, Radio, message } from 'antd';
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./PostList.css";
import useFirestore from "../hooks/useFirestore";

export default function EventList(props) {

    var docs;

    const { Search } = Input;
    const [value, setValue] = React.useState(1);
    const [filterValue, setFilter] = React.useState(1);
    const [keyword, setKey] = React.useState("");
    const [events, setEvents] = React.useState([]);
    useEffect(() => {
        console.log(events);
    }, [events])


    useEffect(() => {
        let temp = [];

        projectFirestore.collection("Events").get().then(snapshot => {
            snapshot.forEach((docRef) => {
                const docData = docRef.data();
                for (let i = 0; i <= 12; i++) {
                    const month = String(i);
                    if (docData[month] !== undefined) {
                        temp = [...temp, ...docData[month].events];
                        setEvents(temp);
                    }
                }
            })
        }) 
    }, [])

    const onChange = e => {
        setValue(e.target.value);
        setFilter(e.target.value);
    };

    const search = () => {
        setKey(document.getElementById("input").value);
        document.getElementById("input").value = "";
    }

    const search_component = () => (
        <Row md={{justify: 'center'}} style={{padding: "24px"}}> 
            <Col xs={24} sm={20} md={18} lg={14} xl={12} xxl={10}>
                <Search
                    placeholder="Search for an event"
                    id='input'
                    enterButton="Search"
                    size="large"
                    onSearch={search}
                />
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Title</Radio>
                    <Radio value={2}>Author</Radio>
                </Radio.Group>  
            </Col>
        </Row>
    );

    const deleteEvent = async (item) => {
        const startDate = new Date(item.startTime);
        const month = String(startDate.getUTCMonth() + 1);
        const year = String(startDate.getUTCFullYear());
        const title = item.title;

        const docRef = projectFirestore.collection("Events").doc(year);
        const doc = await docRef.get();
        const docData = doc.data();
        const eventsInDB = docData[month].events;

        const updatedEventsInDB = eventsInDB.filter((event) => event.title !== title);
        await docRef.update({
            [month]: {events: updatedEventsInDB}
        })

        const updatedEvents = events.filter(event => event.title !== title);
        setEvents(updatedEvents);
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const colorList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    var seed = Math.floor(Math.random() * 10);

    if (props.admin) {
        return (
            <List
                itemLayout="vertical"
                size="large"
                header= {search_component()}
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
                        key={item.title}
                        extra={
                            <Space style={{marginLeft: '-8px'}}> 
                                
                                 <Row justify="end" align='middle' gutter={8}>
                                    <Col xs={0} sm={0} md={0} lg={12}> 
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
                                    <Col xs={0} sm={0} md={0} lg={12}>
                                        <Popconfirm
                                        cancelButtonProps={{type: 'primary'}}
                                        okType={{type: 'default'}}
                                        title="Are you sure to delete this event?"
                                        onConfirm={() => deleteEvent(item)}
                                        onVisibleChange={() => console.log('Event deleted')}
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
                            <span> Location: </span>{item.location} 
                            {item.categories && item.categories.length > 0 && 
                            <>  
                                <p/>
                                <span > Categories: </span>
                                {item.categories.map((category) => (
                                <Tag color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                ))}
                            </>}
                            <p/>
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
                            title="Are you sure to delete this event?"
                            onConfirm={() => deleteEvent(item)}
                            onVisibleChange={() => console.log('Post deleted')}
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
        )
    } else if (props.atHome) {
        return (
            <List
                itemLayout="vertical"
                size="small"
                dataSource={events.slice(0,props.length)}
                // style={{padding: '12px 24px 24px', backgroundColor: 'white'}}
                bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                    >   
                        <Link
                            to={{ pathname: "/specificEvent", state: {

                                calendarEvent: 
                                { 
                                    categories : item.categories,
                                    description : item.content,
                                    location : item.location,
                                    title : item.titletle
                                },
                                date: new Date(item.startTime)
                            }}}
                        > 
                            <List.Item.Meta
                                title={<a>{item.title}</a>}
                                description={
                                    <>
                                        {/* {item.categories && item.categories.length > 0 && 
                                        <>  
                                            {item.categories.map((category) => (
                                            <Tag color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                            ))}
                                        </>} */}
                                        {/* <br/> */}
                                        <span> Date: {new Date(item.startTime).toDateString()}</span><br/>
                                        <span> Location: {item.location} </span> <br/>
                                    </>
                                    }
                            />
                        </Link>  
                    </List.Item>
                )}
            />
        );
    } else {
        return (
            <List
                itemLayout="vertical"
                size="large"
                header= {search_component()}
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
                        key={item.title}
                        actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        ]}
                    >   
                        <Link
                            to={{ pathname: "/specificPost", state: {
                                props: 
                                {src: item.coverImage,
                                title: item.title,
                                author: item.author,
                                description: item.content,
                                date: item.createdAt,
                                label: item.postCategory,
                                categories : item.categories,
                                path: "/specificPost"
                            } }}}
                        > 
                            <List.Item.Meta
                                title={<a>{item.title}</a>}
                                description={
                                    <>
                                        {item.categories && item.categories.length > 0 && 
                                        <>  
                                            {item.categories.map((category) => (
                                            <Tag color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                            ))}
                                        </>}
                                        <br/>
                                        <br/>
                                        <span> Location: </span>{item.location} 
                                    </>
                                    }
                            />
                        
                        </Link>
                        
                    </List.Item>
    
                )}
            />
        )
        
    }
    
}