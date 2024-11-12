import React, { useState } from 'react';
import { Form, Input, Button, Radio, message, Modal, Select } from 'antd';
import axios from 'axios';
import { axiosClient } from '../../libraries/axiosClient';
import { loadavg } from 'os';



function RegistrationForm() {

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const [verifiedForm] = Form.useForm();

  const [checkForm, setCheckForm] = React.useState(false);


  const onVerify = async (values: any) => {
    try {
      console.log("Verify values", values);
      const data = await axiosClient.post('api/auth/email-verification', values);
      if (data.status === 200) {
        message.success('Verify success');
        console.log("Verify success");
        window.location.href = '/login';
      }
      else {
        message.error('Verify failed');
        console.log("Verify failed", data.data.errors);
      }

    }
    catch (error) {
      console.log("Verify failed", error);

      verifiedForm.setFields([
        {
          name: 'code',
          errors: ['Mã code không hợp lệ. Vui lòng thử lại!'],
        },
      ]);
    }

  }


  const onFinish = async (values: any) => {
    try {
      setLoading(true);  // Set loading trạng thái khi bắt đầu hành động
      setTimeout(() => {
        // Sau khi tác vụ hoàn tất
        setLoading(false);  // Tắt trạng thái loading
        message.success('Registration Successful');  // Hiển thị thông báo thành công

      }
        , 5000);
      console.log("Register values", values);
      const data = await axiosClient.post('api/auth/register', values);
      console.log("Register success", data);
      setCheckForm(true);
      message.success('Register success');
      console.info("Register success", data);
    

    }
    catch (error) {
      console.log("Register failed", error);
    }

  };



  return (
    <div className="container" style={{ maxWidth: '500px', margin: '150px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Registration</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >

        <Form.Item
          name="userName"
          label="Username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>




        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
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

        <Form.Item
          name="role"
          label="Role"   
          rules={[{ required: true, message: 'Please select your role!' }]}         
        >
        {/* mặc định là 1 hàng có value user */}
          <Select  placeholder="Enter your role" >
            <Select.Option value="user">User</Select.Option>
            <Select.Option disabled value="admin">Admin</Select.Option>

         
          </Select>
         
        </Form.Item>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>




      <Modal
        centered
        title='Verify user'
        open={checkForm}
        okText='Accept'
        onOk={() => {
          verifiedForm
            .validateFields()
            .then(() => {
              verifiedForm.submit();
            })
            .catch((info) => {
              console.log('Validation Failed:', info);
            });

        }}
        onCancel={() => {
          setCheckForm(false);

        }}
      >

        <Form
          form={verifiedForm}
          layout="vertical"
          onFinish={onVerify}
        >

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="code"
            label="Mã code"
            rules={[{ required: true, message: 'Please enter your code!' }]}

          >
            <Input placeholder="Enter your code" />
          </Form.Item>

        </Form>



      </Modal>



    </div>
  );
}

export default RegistrationForm;
