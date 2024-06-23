import { useState } from "react";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import Messages from "./Messages";

const Drafts = () => {
  const [timeFilter, setTimeFilter] = useState("anytime");
  const [hasAttachment, setHasAttachment] = useState(false);
  const [selectedContact, setSelectedContact] = useState("Any contact");

  const handleTimeFilterChange = (event) => {
    setTimeFilter(event.target.value);
  };

  const toggleAttachment = () => {
    setHasAttachment(!hasAttachment);
  };

  const handleContactChange = (event) => {
    setSelectedContact(event.target.value);
  };

  return (
    <div className="flex-1 bg-white rounded-xl m-5">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:py-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <MdCropSquare size={"20px"} />
          <IoMdRefresh
            size={"20px"}
            className="rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              window.location.reload();
            }}
          />
          <IoMdMore
            size={"20px"}
            className="rounded-full hover:bg-gray-100 cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Result Info */}
          <p className="text-sm text-gray-500 hover:bg-gray-100 p-2 cursor-pointer">
            1–8 of 8
          </p>

          {/* Time Filter */}
          <div className="relative">
            <select
              value={timeFilter}
              onChange={handleTimeFilterChange}
              className="rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500 hover:bg-gray-100 p-2 cursor-pointer"
            >
              <option value="anytime">Any time</option>
              <option value="older-than-week">Older than a week</option>
              <option value="older-than-month">Older than a month</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>

          {/* Attachment Filter */}
          <button
            onClick={toggleAttachment}
            className={`rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500 hover:bg-gray-100 p-2 cursor-pointer ${
              hasAttachment ? "bg-blue-500 text-white" : ""
            }`}
          >
            Has attachment
          </button>

          {/* Contact Filter */}
          <div className="relative">
            <select
              value={selectedContact}
              onChange={handleContactChange}
              className="rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500 hover:bg-gray-100 p-2 cursor-pointer"
            >
              <option value="Any contact">Any contact</option>
              <option value="john.doe@example.com">John Doe</option>
              <option value="jane.smith@example.com">Jane Smith</option>
              <option value="mike.johnson@example.com">Mike Johnson</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Section */}
      <div className="h-[calc(100vh-10rem)] overflow-y-auto">
        <Messages
          folder="drafts"
          timeFilter={timeFilter}
          hasAttachment={hasAttachment}
          selectedContact={selectedContact}
        />
      </div>
    </div>
  );
};

export default Drafts;
