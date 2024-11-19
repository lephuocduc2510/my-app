import { Button, Card, Form, Input, Space, Table, Popconfirm, message, Modal, Select } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Password from 'antd/es/input/Password';
import { axiosClient } from '../../../libraries/axiosClient';
import TextArea from 'antd/es/input/TextArea';


type Props = {};

type FieldType = {
    idRooms: string;
    roomName: string;
    createdDate: Date;
    createdBy: string;
    isActive: Boolean;
    description: string;
    user: string;
    
};


const token = localStorage.getItem('token')

export default function Rooms({ }: Props) {


    const [rooms, setRooms] = React.useState([]);
    const [selectedRoom, setSelectedRoom] = React.useState<any>(null);
    const [createForm] = Form.useForm<FieldType>();
    const [updateForm] = Form.useForm<FieldType>();

    const getRooms = async () => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {

            const response = await axiosClient.get('/api/rooms', config);
            setRooms(response.data.result);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    React.useEffect(() => {
        getRooms();
    }, []);

    const onFinish = async (values: any) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            console.log('Success:', values);
            await axiosClient.post('/api/rooms', values, config);
            getRooms();
            createForm.resetFields();
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const onDelete = async (id: number) => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            await axiosClient.delete(`/api/rooms/${id}`, config);
            getRooms();
            message.success('user deleted successfully!');
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const onUpdate = async (values: any) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            console.log('Success:', values);
            await axiosClient.put(`/api/user/${selectedRoom.id}`, values, config);
            getRooms();
            setSelectedRoom(null);
            message.success('user updated successfully!');
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'idRooms', // Không bắt buộc nếu chỉ hiển thị số thứ tự
            key: 'idRooms',
            width: '1%',
             
          },
        {
            title: 'Room Name',
            dataIndex: 'roomName',
            key: 'roomName',
            width: '1%',
        },
     


        {
            title: 'Status',
            dataIndex: 'isActive',
            key: 'isActive',
            width: '1%',
        },

        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '1%',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
            width: '1%',
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy',
            width: '1%',
        },

        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width: '1%',
            render: (text: any, record: any) => {
                return (
                    <Space size='small'>
                        <Button
                            type='primary'
                            icon={<EditOutlined />}
                            onClick={() => {
                                setSelectedRoom(record);
                                updateForm.setFieldsValue(record);
                            }}
                        />

                        <Popconfirm
                            title='Delete the user'
                            description='Are you sure to delete this user?'
                            onConfirm={() => {
                                onDelete(record.id);
                            }}
                        >
                            <Button type='primary' danger icon={<DeleteOutlined />} />
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    return (
        <div style={{ padding: 36 , marginTop: 50}}>
            <Card title='Create new user' style={{ width: '100%' }}>
                <Form form={createForm} name='create-user' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ name: '', description: '' }} onFinish={onFinish}>
                    <Form.Item<FieldType>
                        label='Room Name'
                        name='roomName'
                        rules={[{ required: true, message: 'Please input room name!' }]}
                        hasFeedback

                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label='Description'
                        name='description'
                        // rules={[{ required: true, message: 'Please input email!' }]}
                        hasFeedback
                    >
                        <TextArea rows={3} />
                    </Form.Item>

                    

                




                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            Save changes
                        </Button>
                    </Form.Item>
                </Form>
            </Card>


            <Card title='List of users' style={{ width: '100%', marginTop: 36 }}>
                <Table dataSource={rooms} columns={columns} />
            </Card>




             {/* Sửa user */}

            <Modal
                centered
                title='Edit user'
                open={selectedRoom}
                okText='Save changes'
                onOk={() => {
                    updateForm.submit();
                }}
                onCancel={() => {
                    selectedRoom(null);
                }}
            >
                <Form form={updateForm} name='update-user' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ name: '', description: '' }} onFinish={onUpdate}>
                <Form.Item<FieldType>
                        label='Room Name'
                        name='roomName'
                        rules={[{ required: true, message: 'Please input room name!' }]}
                        hasFeedback

                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label='Description'
                        name='description'
                        // rules={[{ required: true, message: 'Please input email!' }]}
                        hasFeedback
                    >
                        <TextArea rows={3} />
                    </Form.Item>

             
                </Form>
            </Modal>
        </div>
    );
}