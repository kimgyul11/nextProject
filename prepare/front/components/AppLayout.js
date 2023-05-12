import React from "react";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <p>공통 메뉴</p>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
