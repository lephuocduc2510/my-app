import React from 'react';
import './style.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { axiosClient } from '../../../libraries/axiosClient';


interface User {
  id: string;
  name: string;
  userName: string;
  emailConfirmed: string;
  role: string;
  phoneNumber: string,
  address: string,
  imageUrl: string,
}




export default function ProfilePage() {

  const username = localStorage.getItem('username') || null;
  const [user, setUser] = React.useState<User | null>(null);
  const token = localStorage.getItem('token') || null;
  const [name, setName] = React.useState('');
  const [editing, setEditing] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [checkChange, setCheckChange] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
     
    }
  };



  const getUsers = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      if (!username) {
        return null;
      }
      const response = await axiosClient.get(`api/user/${username}`, config);
      setUser(response.data.result);
    } catch (error) {
      console.log('Error:', error);
    }
  }




  const handleSaveChanges = async () => {
    const formData = new FormData();

    if (name) formData.append("Name", name);
    if (phoneNumber) formData.append("PhoneNumber", phoneNumber);
    if (selectedImage) formData.append("Image", selectedImage);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      await axiosClient.put(`api/user/change-profile`, formData, config);
      setEditing(false); // Tắt chế độ chỉnh sửa
      getUsers(); // Cập nhật dữ liệu người dùng
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };


  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleSaveChanges();  // Gọi hàm sau khi delay
    }, 2000);  // Thời gian delay là 2000ms (2 giây)
  
    // Cleanup function để hủy setTimeout khi component unmount hoặc khi selectedImage thay đổi
    return () => clearTimeout(timer);
  }, [selectedImage]);  
  React.useEffect(() => {
    getUsers();
  }, [username]);



  return (

    <section style={{ backgroundColor: '#eee', height: 750 }}>
      <MDBContainer className="py-5" >
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>

              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={
                    user?.imageUrl ||
                    "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                  }
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover", // Đảm bảo ảnh khớp khung mà không bị biến dạng
                    borderRadius: "50%", // Tạo hình tròn cho khung
                    overflow: "hidden",
                  }}
                  fluid
                />

                <p className="text-muted mt-4 mb-4"> {user?.userName}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn tag="label" className="btn btn-primary">
                    Upload Avatar
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}



          </MDBCol>



          <MDBCol lg="8">



            <MDBCard className="mb-4">
              <MDBCardBody>
                {/* Tên */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {editing ? (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form-control-edit"
                      />
                    ) : (
                      <MDBCardText className="text-muted">{user?.name}</MDBCardText>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />

                {/* Email */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.userName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                {/* Số điện thoại */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {editing ? (
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-control form-control-edit"
                      />
                    ) : (
                      <MDBCardText className="text-muted">
                        {user?.phoneNumber || 'Chưa cập nhật'}
                      </MDBCardText>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />

                {/* Trình trạng email */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Trình trạng email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user?.emailConfirmed === 'True' ? 'Đã xác minh' : 'Chưa xác minh'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />





                {/* Nút chỉnh sửa và lưu thay đổi */}
                <div className="d-flex justify-content-between">
                  {editing ? (
                    <>
                      <MDBBtn color="secondary" onClick={() => setEditing(false)}>
                        Quay lại
                      </MDBBtn>
                      <MDBBtn color="success" onClick={handleSaveChanges}>
                        Lưu thay đổi
                      </MDBBtn>
                    </>
                  ) : (
                    <MDBBtn color="primary" onClick={() => setEditing(true)}>
                      Sửa
                    </MDBBtn>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>



            <MDBRow>
              {/* <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}

              {/* <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );

}