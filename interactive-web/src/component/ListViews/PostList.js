import './PostList.css'

import { Button, Col, Image, Input, List, Popconfirm, Radio, Row, Space, Tag, message } from 'antd'

import { Link } from 'react-router-dom'
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React from 'react'
import { projectFirestore } from '../../firebase/config'
import useFirestore from '../../firebase/useFirestore'

export default function PostList (props) {
  let docs

  const { Search } = Input
  const [value, setValue] = React.useState(1)
  const [filterValue, setFilter] = React.useState(1)
  const [keyword, setKey] = React.useState('')

  const successDel = () => {
    message.success('Successfully delete the post!')
  }

  const onChange = e => {
    setValue(e.target.value)
    setFilter(e.target.value)
  }

  const search = () => {
    setKey(document.getElementById('input').value)
    document.getElementById('input').value = ''
  }

  const searchComponent = () => (
        <Row md={{ justify: 'center' }} style={{ padding: '24px' }}>
            <Col xs={24} sm={20} md={18} lg={14} xl={12} xxl={10}>
                <Search
                    placeholder="Search for a post"
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

  ({ docs } = useFirestore('posts', filterValue, keyword))

  console.log(docs)
  const colorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
  const seed = Math.floor(Math.random() * 10)

  if (props.admin) {
    return (
            <List
                itemLayout="vertical"
                size="large"
                header= {searchComponent()}
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 5
                }}
                dataSource={docs}
                style={{ padding: '12px 24px 24px', backgroundColor: 'white' }}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <Space style={{ marginLeft: '-8px' }}>

                                 <Row justify="end" align='middle' gutter={8}>
                                    <Col xs={0} sm={0} md={0} lg={12}>
                                        <Button style={{ width: '80px' }}>
                                            <Link
                                                to={{
                                                  pathname: './create',
                                                  state:
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
                                    </Col>
                                    <Col xs={0} sm={0} md={0} lg={12}>
                                        <Popconfirm
                                        cancelButtonProps={{ type: 'primary' }}
                                        okType={{ type: 'default' }}
                                        title="Are you sure to delete this post?"
                                        onConfirm={() => {
                                          projectFirestore
                                            .collection('posts')
                                            .doc(item.PostId)
                                            .delete()
                                          successDel()
                                        }}
                                        onVisibleChange={() => console.log('Post deleted')}
                                        >
                                            <Button type="primary" danger style={{ width: '80px' }}>
                                                DELETE
                                            </Button>
                                        </Popconfirm>

                                    </Col>

                                </Row>

                                <Image
                                    width={180}
                                    alt={item.title}
                                    src={item.coverImage}
                                    placeholder={true}
                                    height={135}
                                    style={{ zIndex: 0 }}
                                />

                            </Space>
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
                                <Tag key={item.categories.indexOf(category)} color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                ))}
                            </>}
                            <p/>
                            {/* <span> Last Updated: </span>{item.createdAt} */}
                        </>
                        }
                    />

                    <Row justify="start" align='middle' gutter={8}>
                        <Col lg={0} xl={0} xxl={0}>
                            <Button style={{ width: '80px' }}>
                                <Link
                                    to={{
                                      pathname: './create',
                                      state:
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
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={0} xl={0} xxl={0}>
                            <Popconfirm
                            cancelButtonProps={{ type: 'primary' }}
                            okType={{ type: 'default' }}
                            title="Are you sure to delete this post?"
                            onConfirm={() => {
                              projectFirestore
                                .collection('posts')
                                .doc(item.PostId)
                                .delete()
                              successDel()
                            }}
                            onVisibleChange={() => console.log('Post deleted')}
                            >
                                <Button type="primary" danger style={{ width: '80px' }}>
                                    DELETE
                                </Button>
                            </Popconfirm>
                        </Col>
                    </Row>

                    </List.Item>

                )}
            />
    )
  } else {
    return (
            <List
                itemLayout="vertical"
                size="large"
                header= {searchComponent()}
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 5
                }}
                dataSource={docs}
                style={{ padding: '12px 24px 24px', backgroundColor: 'white' }}
                // bordered="true"
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <Image
                                width={280}
                                alt={item.title}
                                src={item.coverImage}
                                placeholder={true}
                                height={200}
                                style = {{ position: 'relative', zIndex: 0 }}
                            />
                        }
                    >
                        <Link
                            to={{
                              pathname: '/specificPost',
                              state: {
                                props:
                                {
                                  src: item.coverImage,
                                  title: item.title,
                                  author: item.author,
                                  description: item.content,
                                  date: item.createdAt,
                                  label: item.postCategory,
                                  categories: item.categories,
                                  path: '/specificPost'
                                }
                              }
                            }}
                        >
                            <List.Item.Meta
                                title={<a>{item.title}</a>}
                                description={
                                    <>
                                        {item.categories && item.categories.length > 0 &&
                                        <>
                                            {item.categories.map((category) => (
                                            <Tag key={item.categories.indexOf(category)} color={colorList[item.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                                            ))}
                                        </>}
                                        <br/>
                                        <br/>
                                        <span> Author: </span>{item.author}
                                        <p/>
                                        {/* <span> Last Updated: </span>{item.createdAt} */}
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
