import React, { useEffect } from 'react'
import { List, Popconfirm, Col, Button, Row, message, Input } from 'antd'
import { projectFirestore } from '../../firebase/config'
import './PostList.css'

export default function QuestionReviewList () {
  const [events, setEvents] = React.useState([])
  const { TextArea } = Input

  useEffect(() => {
    projectFirestore.collection('CustomerQuestions').orderBy('createdAt', 'desc').onSnapshot((snap) => {
      const documents = []
      snap.forEach((doc) => {
        documents.push(doc.data())
      })
      setEvents(documents)
    })
  }, [])

  const deleteQuestion = async (item) => {
    const email = item.email
    await projectFirestore.collection('CustomerQuestions').doc(email).delete()
  }

  const postQuestion = async (e) => {
    const data = {
      Question: document.getElementById('question').value,
      Answer: document.getElementById('answer').value
    }
    await projectFirestore.collection('QuestionsOnFAQPage').add(data)
    message.success('Post Successfully!')
    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
  }

  const buttonWrapper = () => (
    <Row md={{ justify: 'center' }} style={{ padding: '24px' }} gutter={ [8, 8] }>
        <Col span={24}>
          <Input
                placeholder="Question"
                type="text"
                id="question"
                name="question"
                style={{ width: '100%' }}
            />
        </Col>
        <Col span={24}>
            <TextArea
                placeholder="Answer"
                type="text"
                id="answer"
                name="answer"
                style={{ width: '100%' }}
            />
        </Col>
        <Col span={24}>
            <Button type="primary" onClick={postQuestion} style={{ backgroundColor: '#234144', borderColor: '#1a3133', float: 'right' }}>
                Post It On FAQ
            </Button>
        </Col>
    </Row>
  )

  return (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 5
          }}
          dataSource={events}
          style={{ padding: '12px 24px 24px', backgroundColor: 'white' }}
          header={buttonWrapper()}
          // bordered="true"
          renderItem={item => (
              <List.Item
                  key={item.email}
                  extra={
                    <Popconfirm
                      cancelButtonProps={{ type: 'primary' }}
                      okType={{ type: 'default' }}
                      title="Are you sure to delete this question?"
                      onConfirm={() => deleteQuestion(item)}
                      onVisibleChange={() => console.log('Question deleted')}
                    >
                      <Button type="primary" danger style={{ width: '80px' }}>
                          DELETE
                      </Button>
                    </Popconfirm>
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
  )
}
