import React from "react";
import profile from "../assets/download.jpeg";
import camera from "../assets/camera.png";
function Accountsetting() {
  return (
    <div className="w-xl bg-grey-100 mx-auto flex flex-col justify-center  p-10 ">
      <h2 className="text-2xl font-bold text-center">Account Settings</h2>
      <div className="flex flex-row  mt-4 relative ">
        <div className="w-20 h-20 rounded-full ">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-20 h-20  "
          />
        </div>
        <img
          src={camera}
          alt="camera"
          className="w-5 h-5 rounded-full absolute left-12  top-14 "
        />
        <div className="flex flex-col">
          <h3 className="text-lg mt-2">Marry Doe</h3>
          <p className="text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="mt-4 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet
        harum perferendis, saepe minus doloremque, vel alias quisquam culpa
        praesentium ullam neque nesciunt enim laboriosam.
      </p>
    </div>
  );
}

export default Accountsetting;
