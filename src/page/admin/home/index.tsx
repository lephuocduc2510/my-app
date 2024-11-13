import React from "react";
import './style.css'; // Để áp dụng CSS nếu cần

const AdminHome: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="container">
          <h1>Welcome to Admin Dashboard</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">User Management</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="stats">
            <h2>Dashboard</h2>
            <div className="stat-box">
              <h3>Total Users</h3>
              <p>250</p>
            </div>
            <div className="stat-box">
              <h3>Active Sessions</h3>
              <p>32</p>
            </div>
            <div className="stat-box">
              <h3>Pending Requests</h3>
              <p>5</p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminHome;
