import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
import { axiosClient } from '../../libraries/axiosClient';
import { get } from 'http';
const { jwtDecode } = require('jwt-decode');





const LoginForm = () => {
  const [hide, setHide] = useState(false); // trạng thái điều khiển hiển thị modal
  const [currentPage, setCurrentPage] = useState(1); // trạng thái trang hiện tại của modal

  const [form] = Form.useForm();

  const setHideModal = () => {
    setHide(true);
  };

  useEffect(() => {
    // Reset form fields khi chuyển đổi giữa các trang
    form.resetFields();
  }, [currentPage]);


  const getEmail = async (values: any) => {
    try {
      const response = await axiosClient.post('/api/auth/forgot-password', values);
      if (response.status === 200) {
        message.success('Email sent');
        console.log("Email sent", response.data.result);
        setCurrentPage(currentPage + 1) // Chuyển sang trang 2 khi email được gửi thành công
        console.log("Email sent", currentPage);
      } else {
        message.error('Email failed');
        console.log("Email failed", response.data.errors);
      }
    } catch (error) {
      console.error("Email submission failed:", error);
    }



  }


  const changePassword = async (values: any) => {
    try {
      console.log("Change password values", values);
      const response = await axiosClient.post('/api/auth/reset-password', values);
      if (response.status === 200) {
        message.success('Change password success');
        console.log("Change password success", response.data.result);
        setHide(false); // Đóng modal sau khi đổi mật khẩu thành công
        setCurrentPage(1); // Đặt lại trang về ban đầu
      } else {
        message.error('Change password failed');
        console.log("Change password failed", response.data.errors);
      }
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };


  const checkLogin = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      message.error('No token found, please login again.');
      window.location.href = '/login';    // Redirect to login page if no token found
      return;
    }
    try {
      const decoded = jwtDecode(token);
      if (decoded) {
        console.log("paylaod", decoded);
        if (decoded.role === "user") {
          message.success('Login success');
          window.location.href = '/home';  
          // window.location.href = '/management/users';  // Redirect to users management page
        }
        else if (decoded.role === "mod") {
          message.success('Login success');
          window.location.href = '/home';  
        }
        else
        {
          message.success('Login success');
          window.location.href = '/admin/user';  
        }
         
      }

      else {
        message.error('Error');
        console.log("Login failed no payload");

      }
    } catch (error) {
      console.error("Login failed", error);
      message.error('An error occurred while checking login status');
      window.location.href = '/404-page'; // Redirect to 404 page in case of error
    }
  };


  


  const onFinish = async (values: any) => {
    try {
      const response = await axiosClient.post('/api/auth/login', values);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.result.accessToken);
        message.success('Login success');
        console.log("Login success", response.data.result.accessToken);
        checkLogin();

      } else {
        message.error('Login failed');
        console.log("Login failed", response.data.errors);
      }
    } catch (error) {
      message.error('Login failed');
      console.error("Login failed", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: 'auto', marginBlock: 150 }}>
      <h2>Login</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 0 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a onClick={setHideModal} style={{ marginBottom: 0 }}>Forgot password?</a>
        </div>

        <Form.Item>
          <Button style={{ marginTop: 15 }} type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Modal
        centered
        title='Verify user'
        open={hide}
        okText={currentPage === 1 ? 'Next' : 'Complete'}
        onOk={() => {
          form
            .validateFields()
            .then(() => {
              if (currentPage === 1) {
                form.submit(); // Submit cho form gửi email
              } else {
                changePassword(form.getFieldsValue()); // Gửi yêu cầu đổi mật khẩu
              }
            })
            .catch((info) => {
              console.log('Validation Failed:', info);
            });
        }}
        cancelText={currentPage === 1 ? 'Cancel' : 'Back'}
        onCancel={() => {
          if (currentPage === 2)
            setCurrentPage(1); // Đặt lại trang về ban đầu khi đóng modal
          else
            setHide(false);
        }}
      >
        {currentPage === 1 ? (
          <Form
            form={form}
            layout="vertical"
            onFinish={getEmail}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Form>
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={changePassword}
          >
            <Form.Item
              name="token"
              label="Mã code"
              rules={[{ required: true, message: 'Please enter your code!' }]}
            >
              <Input placeholder="Enter your code" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              name="passwordConfirm"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default LoginForm;
