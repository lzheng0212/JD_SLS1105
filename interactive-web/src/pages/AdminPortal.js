import "./AdminPortal.css";
import { projectAuth } from '../firebase/config';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManageCategoriesPage from "./ManageCategoriesPage";
import CreatePostPage from "./CreatePostPage";
import DeletePostPage from "./DeletePostPage";
import ManageEventsPage from "./ManageEventsPage";
import dashboardPage from "./dashboardPage";



import { useState } from 'react'
import {
  EditOutlined,
  DashboardOutlined,
  CalendarOutlined,
  ExportOutlined,
  OrderedListOutlined,
  FileAddOutlined,
  CommentOutlined
} from '@ant-design/icons';
import { Layout, Menu, message } from "antd";
import NavigationBar from "../component/NavigationBar";
import CreateEventPage from "./CreateEventPage";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function AdminPortal() {
  const [state, setState] = useState('start');
  const signOut = () => {
    projectAuth.signOut();
    message.success("Signed out!");
    setTimeout(() => window.location.assign('/adminLogin'), 1000);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <NavigationBar/>
        <Layout>
          <Router>
            <Sider breakpoint="lg"
              collapsedWidth="64"
              style={{ backgroundColor: '#091111', overflow: 'auto', left: 0}} collapsible >
              <Menu defaultSelectedKeys={['0']} mode="inline" theme='dark' style={{ backgroundColor: '#091111'}}>
                <Menu.Item key="0" icon={<DashboardOutlined />}>
                  <Link to="/adminportal/dashboard">  Dashboard </Link>
                </Menu.Item>
                <Menu.Item key="1" icon={<FileAddOutlined />}>
                  <Link to={{ pathname: "/adminportal/create", state: { update: false } }}> New Post </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<EditOutlined />}>
                  <Link to="/adminportal/deletepostpage"> Manage Posts </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<OrderedListOutlined />}>
                  <Link to="/adminportal/managecategoriespage">  Manage Catagories </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileAddOutlined />}>
                  <Link to={{ pathname: "/adminportal/create/event", state: { update: false } }}> New Event </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<CalendarOutlined />}>
                  <Link to="/adminportal/manageeventspage">  Manage Events </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<CommentOutlined />}>
                  Questions Review
                </Menu.Item>
                <Menu.Item key="7" icon={<ExportOutlined />}>
                  <a onClick={signOut}> Logout </a>
                </Menu.Item>
              </Menu>
            </Sider>
        
            <Layout style={{ padding: '24px 24px 24px'}}>
              <Content style={{backgroundColor: 'white'}}>
                <Route path='/adminportal/dashboard' exact component={dashboardPage}></Route>
                <Route path='/adminportal/create' exact component={CreatePostPage}></Route>
                <Route path='/adminportal/create/event' exact component={CreateEventPage}></Route>
                <Route path='/adminportal/deletepostpage' exact component={DeletePostPage}></Route>
                <Route path='/adminportal/managecategoriespage' exact component={ManageCategoriesPage}></Route>
                <Route path='/adminportal/manageeventspage' exact component={ManageEventsPage}></Route>
                <Route path='/adminportal/' exact component={dashboardPage}></Route>
              </Content>
            </Layout>
          </Router>
        </Layout>
    </Layout>

  );
}


export default AdminPortal;
