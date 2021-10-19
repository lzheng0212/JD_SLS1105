import React, { useState, useEffect } from "react";
import { List, Avatar, Space, Tag, Image, Col } from 'antd';
import { Link } from "react-router-dom";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./PostList.css";
import PostItem from "./PostItem";
import { Column } from "rc-table";

export default function PostList(props) {
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const colorList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    const seed = Math.floor(Math.random() * 10);

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 10,
            }}
            dataSource={props.list}
            style={{padding: '24px', backgroundColor: 'white'}}
            // bordered="true"
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    ]}
                    grid={2}
                    extra={
                        <Image
                            width={272}
                            alt={item.title}
                            src={item.coverImage}
                            placeholder={true}
                            height={182}
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
                            description={<>{item.author} <br/><br/><br/></>}
                        />
                    
                    </Link>
                    
                    
                    {item.categories && item.categories.length > 0 && <>
                        {item.categories.map((category) => (
                        <Tag color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                    ))}
                    </>}

                </List.Item>
            //     <PostItem
            //     src={item.coverImage}
            //     title={item.title}
            //     author={item.author}
            //     description={item.content}
            //     date={item.createdAt}
            //     label={item.postCategory}
            //     categories = {item.categories}
            //     path="/specificPost"
            //   />
            )}
        />
    )
    
}