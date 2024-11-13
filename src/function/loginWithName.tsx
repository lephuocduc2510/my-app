import React, { useState, useEffect } from 'react';
import { Button } from 'antd'; // Giả sử bạn đang sử dụng Ant Design
import { axiosClient } from '../libraries/axiosClient';
import { Link } from 'react-router-dom';
import getNameUser from './getNameUser';

// Lấy name của user từ localStorage


const Login = () => {

  

    const [name, setName] = useState(null);

    useEffect(() => {
        const fetchUserName = async () => {
            const userName = await getNameUser();
            setName(userName);
            if (userName) {
                localStorage.setItem("name", userName);
            } else {
                console.log("Không có tên người dùng");
            }
        };

        fetchUserName();
    }, []); // Chạy một lần khi component mount

    return (
        <Link to="/login">
        <Button type="primary" className="btn-getstarted" href="index.html#about"> 
              
            {name ? name : "Đăng nhập"}
           
        </Button>
        </Link>
    );
};

export default Login;
