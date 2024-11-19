import React, { useState, useEffect } from 'react';
import { Button } from 'antd'; // Giả sử bạn đang sử dụng Ant Design
import { axiosClient } from '../libraries/axiosClient';
import { Link } from 'react-router-dom';

// Lấy name của user từ localStorage




    const getNameUser = async () => {
        // lấy token từ localStorage
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
            return null;
        }
        const payload = token.split(".")[1];
        const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
        // Thêm dấu "=" nếu độ dài không chia hết cho 4
        const padding = base64.length % 4 === 0 ? "" : "=".repeat(4 - (base64.length % 4));
        // Giải mã chuỗi Base64
        const data = JSON.parse(atob(base64 + padding));
        
        const username = data.unique_name;
        localStorage.setItem('username', username);
    
        // gọi api lấy thông tin user
        if (!username) {
            return null;
        }
        // const response = await axiosClient.get(`/users/username/${username}`);
        // console.log(response);
        return username;
    };

   

    

export default getNameUser;
