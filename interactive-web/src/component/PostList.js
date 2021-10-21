import React, { useState, useEffect } from "react";
import { List, Avatar, Space, Tag, Image, Col, Button } from 'antd';
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./PostList.css";

export default function PostList(props) {
    
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
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={props.list}
                style={{padding: '12px 24px 24px', backgroundColor: 'white'}}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <> 
                                <Space>
                                    <Button>
                                        <Link
                                            to={{ pathname: "./create", state:
                                                {   
                                                    update: true,
                                                    postID: item.PostId,
                                                    src: item.coverImage,
                                                    title: item.title,
                                                    content: item.content,
                                                    label: item.postCategory,
                                                    author: item.author,
                                                    categories: item.categories,
                                                    coverImageURL: item.coverImage
                                                } 
                                            }}
                                        >
                                            Edit
                                        </Link> 
                                    </Button>
                                    <Button type="primary" danger 
                                        onClick={() => {
                                            const res = projectFirestore
                                            .collection("posts")
                                            .doc(item.PostId)
                                            .delete();
                                    }}>
                                        DELETE
                                    </Button>
                                    <Image
                                        width={160}
                                        alt={item.title}
                                        src={item.coverImage}
                                        placeholder={true}
                                        height={120}
                                        style={{zIndex: 0}}
                                    />
                                </Space>
                                
                            </>
                        }
                    >   

                        <List.Item.Meta
                            title={<a>{item.title}</a>}
                            description={
                            <>
                                <span> Author: </span>{item.author} 
                                {item.categories && item.categories.length > 0 && 
                                <>  
                                    <p/>
                                    <span > Categories: </span>
                                    {item.categories.map((category) => (
                                    <Tag color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                    ))}
                                </>}
                                <p/>
                                <span> Last Updated: </span>{item.createdAt} 
                            </>
                            }
                        />

                    </List.Item>
    
                )}
            />
        )
    } else {
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={props.list}
                style={{padding: '12px 24px 24px', backgroundColor: 'white'}}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        ]}
                        extra={
                            <Image
                                width={280}
                                alt={item.title}
                                src={item.coverImage}
                                placeholder={true}
                                height={200}
                                style = {{position: "relative"}}
                                style={{zIndex: 0}}
                            />
                        }
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
                                        <span> Author: </span>{item.author} 
                                        <p/>
                                        <span> Last Updated: </span>{item.createdAt} 
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