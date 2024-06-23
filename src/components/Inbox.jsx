import { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox } from "react-icons/md";
import Messages from "./Messages";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Inbox = () => {
  const mailType = [
    { icon: <MdInbox size={"20px"} />, text: "Primary" },
    { icon: <GoTag size={"20px"} />, text: "Promotions" },
    { icon: <FaUserFriends size={"20px"} />, text: "Social" },
  ];

  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl m-5">
      <div className="px-4 py-2 md:flex md:items-center md:justify-between">
        {/* Left Section: Icons and Buttons */}
        <div className="flex items-center gap-2 text-gray-700">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh
              size={"20px"}
              onClick={() => {
                window.location.reload();
              }}
            />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>

        {/* Right Section: Pagination */}
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <p className="text-sm text-gray-500 hover:bg-gray-100 p-2 cursor-pointer">
            1-50 of 2,917
          </p>
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <IoIosArrowBack size={"24px"} />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <IoIosArrowForward size={"24px"} />
          </button>
        </div>
      </div>

      {/* Mail Type Selection */}
      <div className="px-4 py-2 md:flex md:items-center md:justify-between overflow-x-auto">
        <div className="flex items-center gap-1 mt-4 md:mt-0">
          {mailType.map((item, index) => (
            <button
              key={index}
              className={`${
                mailTypeSelected === index
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "border-b-4 border-transparent"
              } w-28 md:w-52 hover:bg-gray-100 flex items-center gap-2 p-2 md:p-4`}
              onClick={() => setMailTypeSelected(index)}
            >
              {item.icon}
              <span className="hidden md:inline">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Section */}
      <div className="h-[calc(100vh-12rem)] overflow-y-auto">
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;
