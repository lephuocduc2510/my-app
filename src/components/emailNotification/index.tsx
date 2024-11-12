import React from 'react';
import { Link } from 'react-router-dom';
import './style.module'; // Thêm file CSS cho style

const EmailNotification = () => {
  return (
    <div className="email-notification-container">
      <h1>Email Sent</h1>
      <p>
        An email has been sent to your email address. Please check your inbox
        and follow the instructions in the email to complete the process.
      </p>
      <p>
        If you do not see the email, please check your spam folder.
      </p>
      <Link to="/login" className="back-to-login">
        Back to Login
      </Link>
    </div>
  );
};

export default EmailNotification;
