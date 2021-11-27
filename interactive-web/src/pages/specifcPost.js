import React, { useEffect } from 'react'
import FooterComponent from '../component/FooterComponent'
import './specificPost.css'
import { useLocation } from 'react-router-dom'
import Quill from 'quill'
import { Layout, PageHeader, Tag, Empty, Divider, Row, Col } from 'antd'
import NavigationBar from '../component/NavigationBar'
import { Content } from 'antd/lib/layout/layout'

// rfc
// Collection on database must have a field named "createdAt"

export default function SpecifcPost () {
  const data = useLocation().state.props
  const colorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
  const seed = Math.floor(Math.random() * 10)

  useEffect(() => {
    const quill = new Quill('#quillPostContent', {
      modules: {
        toolbar: false
      },
      theme: 'snow',
      readOnly: true
    })
    const postContent = JSON.parse(data.description)
    quill.setContents(postContent)
  }, [])

  return (
    <Layout>
      <NavigationBar />
      <Content style={{ padding: '24px', paddingBottom: '0px' }}>
        <Row justify="center">
              <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title={data.title}
                    subTitle={data.date}
                    // extra={[
                    //   <Button key="2">Operation</Button>,
                    //   <Button key="1" type="primary">
                    //     Primary Operation
                    //   </Button>,
                    // ]}
                    style={{ minHeight: '64vh' }}
                  >
                  {data.author &&
                    <span style={{ marginRight: 8 }}>Author: {data.author} </span>
                  }

                  {data.categories && data.categories.length > 0 && <>
                    <span style={{ marginRight: 8 }}>Categories:</span>

                    {data.categories.map((category) => (
                    <Tag key={data.categories.indexOf(category)} color={colorList[data.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                    ))}
                  </>}

                  {(!data.description || data.description.length <= 0) &&
                    <Empty style={{ paddingTop: '12vh', paddingBottom: '12vh' }}/>
                  }

                  {data.description && data.description.length > 0 &&
                  <>
                    <Divider/>
                    <div id="quillPostContent"></div>
                    {/* <Typography>
                      <Title level={2}> {data.title} </Title>
                      <Text>{doc.root.innerHTML}</Text>
                    </Typography> */}
                  </>
                  }

                </PageHeader>
              </Col>
        </Row>

      </Content>
      <FooterComponent />
    </Layout>
  )
}
