import React from 'react';

const Footer = () => {
    return (
      <div
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Made with ♥ by{" "}
        <a
          href="https://www.google.com/"
          style={{ cursor: "pointer" }}
        >
          Quiz app react
        </a>
      </div>
    );
  };
  
  export default Footer;