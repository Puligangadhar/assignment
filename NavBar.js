import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between p-2 bg-dark text-white">
        <div>
          <h5>Rubixe</h5>
        </div>
        <div className="d-flex gap-3">
          <div>Home</div>

          <div>Services</div>
          <div>Products</div>
          <div>AI Internship</div>
          <div>Career</div>
          <div>Blog</div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
