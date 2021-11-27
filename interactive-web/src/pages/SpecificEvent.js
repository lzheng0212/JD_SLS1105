import React from 'react'
import FooterComponent from '../component/FooterComponent'
import { useLocation } from 'react-router-dom'
import { Layout, PageHeader, Tag, Empty, Divider, Typography, Row, Col } from 'antd'
import NavigationBar from '../component/NavigationBar'
import { Content } from 'antd/lib/layout/layout'

export default function SpecificEvent () {
  const { calendarEvent: event, date } = useLocation().state
  const { Text } = Typography
  const colorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
  const seed = Math.floor(Math.random() * 10)
  console.log(useLocation().state)
  console.log(event)
  console.log(date)
  return (
    <Layout >
      <NavigationBar />
      <Content style={{ padding: '24px', paddingBottom: '0px' }}>
        <Row justify="center">
            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
              <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={date.toDateString()}
                style={{ minHeight: '64vh' }}
              >

              {event.categories && event.categories.length > 0 && <>
                <span style={{ marginRight: 8 }}>Categories:</span>
                {event.categories.map((category) => (
                <Tag key={event.categories.indexOf(category)} color={colorList[event.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
                ))}
              </>}

              {(!event.description || event.description.length <= 0) &&
                <Empty style={{ paddingTop: '12vh', paddingBottom: '12vh' }}/>
              }

              {event.description && event.description.length > 0 &&
                <>
                  <Divider/>
                  <Typography>
                    <Text strong> Date: {date.toDateString()} <p/></Text>
                    <Text strong> Time: {event.time} <p/></Text>
                    <Text strong> Location: {event.location} <p/></Text>
                    <Text strong> Description: <p/></Text>
                    <Text> {event.description}</Text>
                  </Typography>
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
