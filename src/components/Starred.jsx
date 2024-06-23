import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdStar, MdCropSquare } from "react-icons/md";

const starredEmails = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Reminder",
    body: "Don't forget about the meeting tomorrow at 10 AM.",
    date: "June 18",
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Project Update",
    body: "Here's the latest update on the project.",
    date: "June 17",
  },
  // Add more sample starred emails here
];

const Starred = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl m-2 md:m-5">
      <div className="flex items-center justify-between px-2 md:px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
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
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 hover:rounded-full hover:bg-gray-100 p-2 hover:cursor-pointer hidden md:block">
            1-50 of 50{" "}
          </p>
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            <IoIosArrowBack size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            {" "}
            <IoIosArrowForward size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[70vh] md:h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          <button
            className={`border-b-4 ${
              mailTypeSelected === 0
                ? "border-b-blue-600 text-blue-600"
                : "border-b-transparent"
            } w-full md:w-52 hover:bg-gray-100 flex items-center gap-5 p-4`}
            onClick={() => setMailTypeSelected(0)}
          >
            <MdStar size={"20px"} />
            <span className="hidden md:block">Starred</span>
          </button>
        </div>
        <div className="p-2 md:p-4">
          {starredEmails.map((email) => (
            <div
              key={email.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <p className="font-bold">{email.sender}</p>
                <p className="text-sm">{email.subject}</p>
              </div>
              <div className="text-sm text-gray-500 md:text-right">
                <p>{email.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starred;
