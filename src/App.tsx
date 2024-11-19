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
import Chat from './page/chat'
import Users from './page/admin/user'
import UserLayout from './page/user/layout'
import LayoutAdmin from './page/admin/layout'
import AccountSettings from './page/admin/profile'
import NotFoundPage from './page/404_Page'
import UserProfile from './page/user/profile'
import ProfilePage from './page/user/profile'
import Admin2 from './page/admin/admin2'
import Rooms from './page/admin/room'




function App() {
  return (
<Router>
    <Routes>
      {/* Các route cơ bản */}
      <Route path="/" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/home" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/login" element={<UserLayout><LoginForm /></UserLayout>} />
      <Route path="/register" element={<UserLayout><RegistrationForm /></UserLayout>} />
      <Route path="/auth/email-sent" element={<EmailVerify />} />
      <Route path="/auth/verify-email/:userId/:unique_string" element={<EmailVerify />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/404-page" element={<NotFoundPage/>} />
      <Route path="/user-profile" element={<UserLayout><ProfilePage /></UserLayout>} />



     
    </Routes>


    <Routes>
    <Route path="/admin" element={<LayoutAdmin><AdminHome /></LayoutAdmin>} />
       <Route path="/admin2" element={<Admin2 />} />
      <Route path="/profile" element={<LayoutAdmin><AccountSettings /></LayoutAdmin>} />
      <Route path="/users" element={<LayoutAdmin><Users /></LayoutAdmin>} />
      <Route path="/rooms" element={<LayoutAdmin><Rooms /></LayoutAdmin>} />
     
    </Routes>
  </Router>



  )
}

export default App
