import React, { useState, useEffect } from 'react';
import { Button } from 'antd'; // Giả sử bạn đang sử dụng Ant Design
import { axiosClient } from '../libraries/axiosClient';
import { Link } from 'react-router-dom';
import getNameUser from './getNameUser';
import { MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';

// Lấy name của user từ localStorage






const Login = () => {

    
    const [name, setName] = useState(null);


    const signOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
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
        <>
            {name ? (

                <MDBDropdown>
                    <MDBDropdownToggle tag="a" className="name ">
                        <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="container mb-1" style={{ backgroundColor: '#92D1E8', height: '55px', borderRadius: 10}}>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                    className="rounded-circle me-3"
                                    style={{ width: "40px" }}
                                    alt="Avatar"
                                />

                                <span>
                                    <strong style={{color: '525557', fontSize: 15}}>{name}</strong>
                                </span>
                            </div>
                        </MDBContainer>
                    </MDBDropdownToggle>

                    <MDBDropdownMenu className="mdb-dropdown-menu "  style={{left: '25px', width: '80%', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px'}}>
                    <MDBDropdownItem link className="mdb-dropdown-item" style={{textAlign: 'center', fontSize: 15, borderBottom: 'solid 0.5px'}} onClick={() => {
                        window.location.href = '/user-profile';
                    }}>Profile</MDBDropdownItem>
                        <MDBDropdownItem link className="mdb-dropdown-item" style={{textAlign: 'center', fontSize: 15}} onClick={signOut}>Log Out</MDBDropdownItem>
                        
                    </MDBDropdownMenu>
                </MDBDropdown>
            ) : (
              
                    <Button type="primary" className="ms-3">
                        <Link to="/login">Đăng nhập</Link>
                    </Button>
                
            )}


        </>
    );
};

export default Login;
