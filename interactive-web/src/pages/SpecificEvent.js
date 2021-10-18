import React, { useEffect } from "react";
import FooterComponent from "../component/FooterComponent";
import { useLocation } from "react-router-dom";
import { Layout, PageHeader, Button, Tag, Empty, Divider, Typography } from "antd";
import NavigationBar from "../component/NavigationBar";
import { Content } from "antd/lib/layout/layout";

export default function SpecificEvent() {

  const {calendarEvent: event, date} = useLocation().state;
  const { Title, Text } = Typography;
  const colorList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]
  const seed = Math.floor(Math.random() * 10)
  console.log(useLocation().state)
  console.log(event)
  console.log(date)
  return (
    <Layout >
      <NavigationBar />
      <Content style={{padding: '24px', paddingBottom: '0px'}}>

        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={date.toDateString()}
          // subTitle="This is a subtitle"
          extra={[
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary Operation
            </Button>,
          ]}
          style={{minHeight: "64vh"}}
        > 
         
        {event.categories && <>
          <span style={{ marginRight: 8 }}>Categories:</span>
          {event.categories.map((category) => (
          <Tag color={colorList[event.categories.indexOf(category) + seed % colorList.length]}> {category} </Tag>
        ))}
        </>}

        {!event.description || event.description.length <= 0 &&
          <Empty style={{paddingTop: "12vh", paddingBottom: "12vh"}}/> 
        }

        {event.description && event.description.length > 0 &&
          <>
            <Divider/>
            <Typography> 
              <Title level={2}> Hello </Title>
              <Text>{event.description}</Text>
            </Typography>
          </>
        }

        </PageHeader>
{/*         
        <p id="specificPostBody"></p>
        <p>{date.toDateString()}</p>
        <p>{event.categories.join(", ")}</p>
        <p>HELLO</p>
        <p>{event.description}</p> */}
      </Content>
      <FooterComponent />
    </Layout>
  );
}
