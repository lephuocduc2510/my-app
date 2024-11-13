import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Sign } from 'crypto'

import EmailVerify from './components/emailVerification'
import logo from '../src/image/logo.png'
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Col, Divider, Dropdown, Input, Menu, Row } from 'antd'
import { DownOutlined, FacebookOutlined, InstagramOutlined, LinkOutlined, TwitchOutlined } from '@ant-design/icons';
import Home from './page/home'
import LoginForm from './page/login'
import RegistrationForm from './page/register'
import Login from './function/loginWithName'
import AdminHome from './page/admin/home'
import Users from './page/admin/user'
// import 'antd/dist/antd.css';

// import 'antd/dist/antd.css';

const signOut = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <Header className="header d-flex align-items-center fixed-top">
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
                  <a onClick={signOut} >Đăng xuất</a>
                </Menu.Item>
              </Menu>

              <Login />
            </div>
          </Header>

          <div className="auth-inner">
            <Routes>
              {/* Các route cơ bản */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/auth/email-sent" element={<EmailVerify />} />
              <Route path="/auth/verify-email/:userId/:unique_string" element={<EmailVerify />} />
              <Route path="/admin/user" element={<Users />} />
              {/* Route cho trang Admin và các route con */}
              <Route path="/admin" element={<AdminHome />}>
                
              </Route>
            </Routes>
          </div>



          <Footer id="footer" className="footer position-relative light-background">
            <div className="container footer-top">
              <Row gutter={[24, 24]} style={{ width: "100%" }}>
                {/* Footer About Section */}
                <Col xs={24} sm={12} md={6} lg={6}>
                  <div className="footer-about">
                    <a href="index.html" className="logo d-flex align-items-center">
                      <span className="sitename">QuickStart</span>
                    </a>
                    <div className="footer-contact pt-3">
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                      <p className="mt-3">
                        <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                      </p>
                      <p>
                        <strong>Email:</strong> <span>info@example.com</span>
                      </p>
                    </div>
                    <div className="social-links d-flex mt-4">
                      <a href="#">
                        <TwitchOutlined />
                      </a>
                      <a href="#">
                        <FacebookOutlined />
                      </a>
                      <a href="#">
                        <InstagramOutlined />
                      </a>
                      <a href="#">
                        <LinkOutlined />
                      </a>
                    </div>
                  </div>
                </Col>

                {/* Useful Links Section */}
                <Col xs={24} sm={12} md={6} lg={6}>
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                </Col>

                {/* Our Services Section */}
                <Col xs={24} sm={12} md={6} lg={6}>
                  <div className="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">Web Development</a></li>
                      <li><a href="#">Product Management</a></li>
                      <li><a href="#">Marketing</a></li>
                      <li><a href="#">Graphic Design</a></li>
                    </ul>
                  </div>
                </Col>

                {/* Newsletter Section */}
                <Col xs={24} sm={12} md={6} lg={6}>
                  <div className="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <form action="forms/newsletter.php" method="post" className="php-email-form">
                      <div className="newsletter-form">
                        <Input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="newsletter-input"
                          size="large"
                        />
                        <Button type="primary" size="large" htmlType="submit">
                          Subscribe
                        </Button>
                      </div>
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Copyright and Credits Section */}
            <div className="container copyright text-center mt-4">
              <Divider />
              <p>
                © <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong>
                <span>All Rights Reserved</span>
              </p>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </Footer>
        </div>
      </div>





    </Router>
  )
}

export default App
