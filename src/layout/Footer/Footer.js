import React from "react";

function Footer(props) {
  return (
    <>
      <div className="flex justify-evenly col-auto bg-blue-500 p-6">
        <p className="">&copy; 2024 Portfolio. All Rights Reserved.</p>
        <div className="flex justify-end items-center gap-5">
          <a href="https://discord.com/" target="_blank">
            <i className="fa-brands fa-discord text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa-brands fa-youtube text-2xl"></i>
          </a>
          <a href="https://github.com/HATAEMIN1" target="_blank">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
