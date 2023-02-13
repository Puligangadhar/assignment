import React from "react";

const bottom = () => {
  return (
    <div className="bottom row">
      <div className="row">
        <div className="col-md-4">
          <h5 className="bothead">ABOUT US</h5>
          <p>
            Rubixe is a global technology comapny specialising in descruptive
            technologies
          </p>
        </div>

        <div className="col-md-4">
          {" "}
          <h5 className="bothead">MENU</h5>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Career</li>
            <li>Learn More</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="bothead">ADDRESS</h5>
          <ul>
            <li>Novel Tech Park,1st floor,Hosurv Rd</li>
            <li>Kudlu gate,Bengaluru,Karnataka</li>
            <li>560068</li>
            <li>Phone:0804 717 8999</li>
            <li>Email:hr@rubixe.com</li>
            <li>SOCIAL MEDIA</li>
          </ul>
        </div>
      </div>
      <p className="bg-dark des2">
        e copyright 2017| Rubixe is a brand of THINK AHEAD INNOVATIVE PVT
        LTD.|All rights Reserved
      </p>
    </div>
  );
};

export default bottom;
