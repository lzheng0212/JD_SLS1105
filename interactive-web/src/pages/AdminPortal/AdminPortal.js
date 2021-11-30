import './AdminPortal.css'
import React from 'react'
import { projectAuth } from '../../firebase/config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ManageCategoriesPage from './ManageCategoriesPage'
import CreatePostPage from './CreatePostPage'
import DeletePostPage from './DeletePostPage'
import ManageEventsPage from './ManageEventsPage'
import dashboardPage from '../dashboardPage'
import QuestionReviewPage from './QuestionReviewPage'
import ManageTimelinePage from './ManageTimelinePage'

import {
  EditOutlined,
  DashboardOutlined,
  CalendarOutlined,
  ExportOutlined,
  OrderedListOutlined,
  FileAddOutlined,
  CommentOutlined
} from '@ant-design/icons'
import { Layout, Menu, message } from 'antd'
import NavigationBar from '../../component/NavigationBar'
import CreateEventPage from './CreateEventPage'
import CreateMapElement from './CreateMapElement'
import AddTimelineEventPage from './AddTimelineEventPage'

const { Content, Sider } = Layout

function AdminPortal () {
  const signOut = () => {
    projectAuth.signOut()
    message.success('Signed out!')
    setTimeout(() => window.location.assign('/adminLogin'), 1000)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <NavigationBar/>
        <Layout>
          <Router>
            <Sider breakpoint="lg"
              collapsedWidth="64"
              style={{ backgroundColor: '#091111', overflow: 'auto', left: 0 }} collapsible >
              <Menu defaultSelectedKeys={['0']} mode="inline" theme='dark' style={{ backgroundColor: '#091111' }}>
                <Menu.Item key="0" icon={<DashboardOutlined />}>
                  <Link to="/adminportal/dashboard">  Dashboard </Link>
                </Menu.Item>
                <Menu.Item key="1" icon={<FileAddOutlined />}>
                  <Link to={{ pathname: '/adminportal/create', state: { update: false } }}> New Post </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<EditOutlined />}>
                  <Link to="/adminportal/deletepostpage"> Manage Posts </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<OrderedListOutlined />}>
                  <Link to="/adminportal/managecategoriespage">  Manage Catagories </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileAddOutlined />}>
                  <Link to={{ pathname: '/adminportal/create/event', state: { update: false } }}> New Event </Link>
                </Menu.Item>

                <Menu.Item key="5" icon={<CalendarOutlined />}>
                  <Link to="/adminportal/manageeventspage">  Manage Events </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<FileAddOutlined />}>
                  <Link to={{ pathname: '/adminportal/manageMap', state: { update: false } }}> Manage Map  </Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<CommentOutlined />}>
                  <Link to="/adminportal/questionReviewPage"> Questions Review </Link>
                </Menu.Item>
                {/* <Menu.Item key="8" icon={<CalendarOutlined />}>
                <Link to="/adminportal/addtimelineeventpage">  New Timeline event </Link>
                </Menu.Item> */}
                <Menu.Item key="8" icon={<CalendarOutlined />}>
                <Link to="/adminportal/managetimeline">  Manage Timeline </Link>
                </Menu.Item>
                <Menu.Item key="9" icon={<ExportOutlined />}>
                  <a onClick={signOut}> Logout </a>
                </Menu.Item>
              </Menu>
            </Sider>

            <Layout>
              <Content style={{ backgroundColor: 'white' }}>
                <Route path='/adminportal/dashboard' exact component={dashboardPage}></Route>
                <Route path='/adminportal/create' exact component={CreatePostPage}></Route>
                <Route path='/adminportal/create/event' exact component={CreateEventPage}></Route>
                <Route path='/adminportal/deletepostpage' exact component={DeletePostPage}></Route>
                <Route path='/adminportal/manageMap' exact component={CreateMapElement}></Route>
                <Route path='/adminportal/managecategoriespage' exact component={ManageCategoriesPage}></Route>
                <Route path='/adminportal/manageeventspage' exact component={ManageEventsPage}></Route>
                <Route path='/adminportal/questionReviewPage' exact component={QuestionReviewPage}></Route>
                <Route path='/adminportal/' exact component={dashboardPage}></Route>
                <Route path='/adminportal/addtimelineeventpage' exact component={AddTimelineEventPage}></Route>
                <Route path='/adminportal/managetimeline' exact component={ManageTimelinePage}></Route>
              </Content>
            </Layout>
          </Router>
        </Layout>
    </Layout>

  )
}

export default AdminPortal
