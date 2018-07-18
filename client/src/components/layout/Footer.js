import React from "react";

const Footer = fixed => {
  return (
    <footer className="bg-dark p-3 text-center footer fixed-bottom">
      Copyright &copy; {new Date().getFullYear()} Dev Connector
    </footer>
  );
};

export default Footer;
