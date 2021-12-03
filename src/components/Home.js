import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {Link} from 'react-router-dom'
import './Home.css';
import Setting from "./Setting"

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Home() {
    return (
        <div className="home">
                <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Setting</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Avatar size={64} icon={<UserOutlined />} />
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="1">News Feed</Menu.Item>
              <Menu.Item key="2">Pages</Menu.Item>
              <Menu.Item key="3">Groups</Menu.Item>
              <Menu.Item key="4">
              <Link to="/">Logout</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Welcome to Friends App!</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Friends App by <b>Muhammad Ibrahim</b></Footer>
  </Layout>
        </div>
    )
}

export default Home;


// function Home() {
//     return (
//         <div className="home">
//                 <h1>Welcome to the Friends Social Network.</h1>
                
//                 <Button type="primary" htmlType="submit" className="logout">
//                     <Link to="/">Logout</Link>
//                 </Button>
//         </div>
//     )
// }
