
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Col, Divider, Dropdown, Input, Menu, Row } from 'antd'
import { DownOutlined, FacebookOutlined, InstagramOutlined, LinkOutlined, TwitchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'
import './style.css';


import Login from '../../../function/loginWithName';
const menu = (
    <Menu>
      <Menu.Item>
        <a href="#">Dropdown 1</a>
      </Menu.Item>
      <Menu.SubMenu title="Deep Dropdown">
        <Menu.Item><a href="#">Deep Dropdown 1</a></Menu.Item>
        <Menu.Item><a href="#">Deep Dropdown 2</a></Menu.Item>
        <Menu.Item><a href="#">Deep Dropdown 3</a></Menu.Item>
        <Menu.Item><a href="#">Deep Dropdown 4</a></Menu.Item>
        <Menu.Item><a href="#">Deep Dropdown 5</a></Menu.Item>
      </Menu.SubMenu>
      <Menu.Item><a href="#">Dropdown 2</a></Menu.Item>
      <Menu.Item><a href="#">Dropdown 3</a></Menu.Item>
      <Menu.Item><a href="#">Dropdown 4</a></Menu.Item>
    </Menu>
  );


// import 'antd/dist/antd.css';

// import 'antd/dist/antd.css';


const HeaderUser = () => {
    return (
        <Header className="header d-flex align-items-center fixed-top mb-5">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
              <a href="index.html" className="logo d-flex align-items-center me-auto">
                <img src={logo} alt="" />
                <h1 className="sitename">QuickStart</h1>
              </a>

              <Menu mode="horizontal" className="navmenu">
                <Menu.Item key="home">
                  <a href="index.html#hero" className="active">Home</a> <Link to="/Home" />
                </Menu.Item>
                <Menu.Item key="about">
                  <a href="index.html#about">About</a>
                </Menu.Item>
                <Menu.Item key="features">
                  <a href="index.html#features">Features</a>
                </Menu.Item>
                <Menu.Item key="services">
                  <a href="index.html#services">Services</a>
                </Menu.Item>
                <Menu.Item key="pricing">
                  <a href="index.html#pricing">Pricing</a>
                </Menu.Item>
                <Menu.Item key="dropdown" className="dropdown">
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Dropdown <DownOutlined />
                    </a>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item key="contact">
                  <a  >Contact</a>
                </Menu.Item>

                
              </Menu>
          
                <Login />
                

             
            </div>
          </Header>
    )
}

export default HeaderUser;