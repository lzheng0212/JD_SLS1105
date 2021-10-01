import "./AdminPortal.css";
import CreatePostButton from "../component/postComponents/createPostButton";
import { Button } from "../component/Button";
import {projectAuth} from '../firebase/config';
import Countvisitor from "../component/postComponents/visitorCuntor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManageCategoriesPage from "./ManageCategoriesPage";
import CreatePostPage from "./CreatePostPage";
import DeletePostPage from "./DeletePostPage";
import SpecifcPost from "./specifcPost";
import { useState } from 'react'
import {
  EditOutlined,
  DashboardOutlined,
  FolderOutlined,
  ExportOutlined,
  OrderedListOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { Layout, Menu} from "antd";
import FooterComponent from "../component/FooterComponent";
import NavigationBar from "../component/NavigationBar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function AdminPortal() {
  const [state, setState] = useState('start');
  return (
    // <div>
    //   <h1 className="portal_h1">Admin Portal</h1>
    //   <div className="button-wrapper" id="one">
    //     <CreatePostButton />

    //     <Button buttonStyle="btn--primary" buttonSize="btn--huge">
    //       Draft
    //     </Button>

    //     <Button buttonStyle="btn--primary" buttonSize="btn--huge">
    //       Setting
    //     </Button>
    //   </div>

    //   <div className="button-wrapper">
    //     {/* <canvas id="box" width="20" height="30"  
    //                 style="position: absolute; top:0; left:0; border:3px solid black;">
    //             </canvas>  */}

    //     <Button
    //       buttonStyle="btn--primary"
    //       buttonSize="btn--huge"
    //       path="./manage"
    //     >
    //       Manage Old Posts
    //     </Button>
        
    //     <Button buttonStyle="btn--primary" buttonSize="btn--huge" path="/manage/categories">
    //       Manage Categories
    //     </Button>
        
    //     <Button buttonStyle="btn--primary" buttonSize="btn--huge" onclick={async (e) => projectAuth.signOut()} path="./adminLogin">
    //       Sign out
    //     </Button>
    //   </div>

    //   <div className="button-wrapper">
    //     <div id="CounterVisitor">
    //       <p>This page has</p>
    //       <h1 id="count">0</h1>
    //       <p>Views</p>
    //     </div>

    //     <Button buttonStyle="btn--primary" buttonSize="btn--huge">
    //       XXX
    //     </Button>
    //   </div>

    //   {/* <div>
    //             <Countvisitor/>
    //         </div> */}
    // </div>
   

    <Layout style = {{ minHeight: '100vh'}}>
      <div style ={{position: 'fixed', width: '100%', zIndex: '1'}}> 
        <NavigationBar/>
      </div>
      <Router>
        <Layout>
          <Sider breakpoint="lg"
          collapsedWidth="64"
          style = {{backgroundColor: '#091111', position: 'fixed', height: '100vh', marginTop: '64px', zIndex: '8'}} collapsible >
              <Menu defaultSelectedKeys={['0']} mode="inline" theme='dark' style={{backgroundColor: '#091111', zIndex: '8'}}>
                <Menu.Item key="0" icon={<DashboardOutlined />}>
                  <a href="/adminportal"> Dashboard </a>
                </Menu.Item>   
                <Menu.Item key="1" icon={<FileAddOutlined />}>
                  <Link to="/adminportal/create"> Create Post </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<EditOutlined />}>
                  <Link to="/adminportal/deletepostpage"> Manage Posts </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<OrderedListOutlined />}>
                <Link to="/adminportal/managecategoriespage">  Manage Catagories </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<FolderOutlined />}>
                  Files
                </Menu.Item>
                <Menu.Item key="5" icon={<ExportOutlined />}>
                  <a onclick={async (e) => projectAuth.signOut()} href="/adminLogin"> Logout </a>
                </Menu.Item>
              </Menu>
          </Sider>
          <Layout>
              <Route path='/adminportal/create' exact component={CreatePostPage}></Route>
              <Route path='/adminportal/deletepostpage' exact component={DeletePostPage}></Route>
              <Route path='/adminportal/managecategoriespage' exact component={ManageCategoriesPage}></Route>
          </Layout>
        </Layout>
      </Router>
    </Layout>
      
  );
}

export default AdminPortal;
