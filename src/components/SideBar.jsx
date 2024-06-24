/*
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { BiSolidInbox } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegFile } from "react-icons/fa";
import {
  MdExpandMore,
  MdExpandLess,
  MdLabelImportantOutline,
  MdOutlineScheduleSend,
  MdLabelOutline,
  MdArrowRight,
} from "react-icons/md";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMails, LuUsers } from "react-icons/lu";
import {
  RiSpam2Line,
  RiDeleteBin6Line,
  RiErrorWarningLine,
} from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { BsTagsFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import SendMail from "./SendMail";

const SideBar = () => {
  const sideBarItems = [
    { icon: <BiSolidInbox size={"24px"} />, text: "Inbox", link: "/" },
    { icon: <FaRegStar size={"24px"} />, text: "Starred", link: "/starred" },
    {
      icon: <AiOutlineClockCircle size={"24px"} />,
      text: "Snozzed",
      link: "/snoozed",
    },
    { icon: <GoPaperAirplane size={"24"} />, text: "Sent", link: "/sent" },
    { icon: <FaRegFile size={"24px"} />, text: "Drafts", link: "/drafts" },
  ];

  const [content, setContent] = useState(false);
  const toggle = () => setContent(!content);

  const [categories, setCategories] = useState(false);
  const toggleC = () => setCategories(!categories);

  const navOn = useSelector((state) => state.appSlice.sidebar);
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.appSlice.open);

  return (
    <>
      {navOn && (
        <div className="w-[250px] bg-white h-screen shadow-lg rounded-[23px] overflow-y-scroll no-scrollbar">
          <div className="p-3">
            <button
              className="flex items-center gap-2 p-3 rounded-2xl bg-[#C2E7FF] hover:shadow-md"
              onClick={() => dispatch(setOpen(true))}
            >
              <LuPencil size={"24px"} />
              Compose
            </button>
            {isOpen && <SendMail />}
          </div>
          <div className="px-2 text-gray-900">
            {sideBarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
              >
                <Link to={item.link} className="flex items-center gap-4">
                  {item.icon}
                  <p className="text-gray-900">{item.text}</p>
                </Link>
              </div>
            ))}
            <div>
              {!content ? (
                <div
                  onClick={toggle}
                  className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
                >
                  <MdExpandMore size={"24px"} />
                  <p className="text-gray-900">More</p>
                </div>
              ) : (
                <div className="flex flex-col text-gray-900">
                  <div
                    onClick={toggle}
                    className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
                  >
                    <MdExpandLess size={"24px"} />
                    <p className="text-gray-900">Less</p>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <MdLabelImportantOutline size={"24px"} />
                      <p className="text-gray-900">Important</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <IoChatboxEllipsesOutline size={"24px"} />
                      <p className="text-gray-900">Chats</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <MdOutlineScheduleSend size={"24px"} />
                      <p className="text-gray-900">Scheduled</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <LuMails size={"24px"} />
                      <p className="text-gray-900">All Mail</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <RiSpam2Line size={"24px"} />
                      <p className="text-gray-900">Spam</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <RiDeleteBin6Line size={"24px"} />
                      <p className="text-gray-900">Bin</p>
                    </Link>
                  </div>
                  <div
                    className={`${
                      !categories ? "rounded-r-full hover:bg-gray-200" : "gap-2"
                    } p-2`}
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={toggleC}
                    >
                      <MdArrowRight size={"24px"} />
                      <MdLabelOutline size={"24px"} />
                      <p className="text-gray-900">Categories</p>
                    </div>
                    {categories && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <LuUsers size={"24px"} />
                            <p className="text-gray-900">Social</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <RiErrorWarningLine size={"24px"} />
                            <p className="text-gray-900">Updates</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <TiMessages size={"24px"} />
                            <p className="text-gray-900">Forums</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <BsTagsFill size={"24px"} />
                            <p className="text-gray-900">Promotions</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <IoSettingsOutline size={"24px"} />
                      <p className="text-gray-900">Manage labels</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <GoPlus size={"24px"} />
                      <p className="text-gray-900">Create new label</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
              <Link to={"/"} className="flex items-center gap-4">
                <p className="text-2xl text-gray-900">Labels</p>
                <GoPlus size={"36px"} className="rounded-full hover:p-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
*/


import { useState } from "react";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { BiSolidInbox } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegFile } from "react-icons/fa";
import {
  MdExpandMore,
  MdExpandLess,
  MdLabelImportantOutline,
  MdOutlineScheduleSend,
  MdLabelOutline,
  MdArrowRight,
} from "react-icons/md";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMails, LuUsers } from "react-icons/lu";
import {
  RiSpam2Line,
  RiDeleteBin6Line,
  RiErrorWarningLine,
} from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { BsTagsFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import SendMail from "./SendMail";

const SideBar = () => {
  const sideBarItems = [
    { icon: <BiSolidInbox size={"24px"} />, text: "Inbox", link: "/" },
    { icon: <FaRegStar size={"24px"} />, text: "Starred", link: "/starred" },
    {
      icon: <AiOutlineClockCircle size={"24px"} />,
      text: "Snoozed",
      link: "/snoozed",
    },
    { icon: <GoPaperAirplane size={"24"} />, text: "Sent", link: "/sent" },
    { icon: <FaRegFile size={"24px"} />, text: "Drafts", link: "/drafts" },
  ];

  const [content, setContent] = useState(false);
  const toggle = () => setContent(!content);

  const [categories, setCategories] = useState(false);
  const toggleC = () => setCategories(!categories);

  const navOn = useSelector((state) => state.appSlice.sidebar);
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.appSlice.open);

  return (
    <>
      {navOn && (
        <div className="w-full md:w-[250px] bg-white h-screen shadow-lg rounded-[13px] mt-2 overflow-y-scroll no-scrollbar">
          <div className="p-3">
            <button
              className="flex items-center gap-2 p-3 rounded-2xl bg-[#C2E7FF] hover:shadow-md"
              onClick={() => dispatch(setOpen(true))}
            >
              <LuPencil size={"24px"} />
              Compose
            </button>
            {isOpen && <SendMail />}
          </div>
          <div className="px-2 text-gray-900">
            {sideBarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
              >
                <Link to={item.link} className="flex items-center gap-4">
                  {item.icon}
                  <p className="text-gray-900">{item.text}</p>
                </Link>
              </div>
            ))}
            <div>
              {!content ? (
                <div
                  onClick={toggle}
                  className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
                >
                  <MdExpandMore size={"24px"} />
                  <p className="text-gray-900">More</p>
                </div>
              ) : (
                <div className="flex flex-col text-gray-900">
                  <div
                    onClick={toggle}
                    className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
                  >
                    <MdExpandLess size={"24px"} />
                    <p className="text-gray-900">Less</p>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <MdLabelImportantOutline size={"24px"} />
                      <p className="text-gray-900">Important</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <IoChatboxEllipsesOutline size={"24px"} />
                      <p className="text-gray-900">Chats</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <MdOutlineScheduleSend size={"24px"} />
                      <p className="text-gray-900">Scheduled</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <LuMails size={"24px"} />
                      <p className="text-gray-900">All Mail</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <RiSpam2Line size={"24px"} />
                      <p className="text-gray-900">Spam</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <RiDeleteBin6Line size={"24px"} />
                      <p className="text-gray-900">Bin</p>
                    </Link>
                  </div>
                  <div
                    className={`${
                      !categories ? "rounded-r-full hover:bg-gray-200" : "gap-2"
                    } p-2`}
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={toggleC}
                    >
                      <MdArrowRight size={"24px"} />
                      <MdLabelOutline size={"24px"} />
                      <p className="text-gray-900">Categories</p>
                    </div>
                    {categories && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <LuUsers size={"24px"} />
                            <p className="text-gray-900">Social</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <RiErrorWarningLine size={"24px"} />
                            <p className="text-gray-900">Updates</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <TiMessages size={"24px"} />
                            <p className="text-gray-900">Forums</p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                          <Link to={"/"} className="flex items-center gap-4">
                            <BsTagsFill size={"24px"} />
                            <p className="text-gray-900">Promotions</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <IoSettingsOutline size={"24px"} />
                      <p className="text-gray-900">Manage labels</p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
                    <Link to={"/"} className="flex items-center gap-4">
                      <GoPlus size={"24px"} />
                      <p className="text-gray-900">Create new label</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LuPencil } from "react-icons/lu";
// import { FaRegStar } from "react-icons/fa";
// import { BiSolidInbox } from "react-icons/bi";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { GoPaperAirplane } from "react-icons/go";
// import { FaRegFile } from "react-icons/fa";
// import {
//   MdExpandMore,
//   MdExpandLess,
//   MdLabelImportantOutline,
//   MdOutlineScheduleSend,
//   MdLabelOutline,
//   MdArrowRight,
// } from "react-icons/md";
// import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
// import { LuMails, LuUsers } from "react-icons/lu";
// import {
//   RiSpam2Line,
//   RiDeleteBin6Line,
//   RiErrorWarningLine,
// } from "react-icons/ri";
// import { TiMessages } from "react-icons/ti";
// import { BsTagsFill } from "react-icons/bs";
// import { GoPlus } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { setOpen } from "../redux/appSlice";
// import SendMail from "./SendMail";


// const SideBar = () => {
//   const sideBarItems = [
//     { icon: <BiSolidInbox size={"24px"} />, text: "Inbox", link: "/" },
//     { icon: <FaRegStar size={"24px"} />, text: "Starred", link: "/starred" },
//     {
//       icon: <AiOutlineClockCircle size={"24px"} />,
//       text: "Snoozed",
//       link: "/snoozed",
//     },
//     { icon: <GoPaperAirplane size={"24"} />, text: "Sent", link: "/sent" },
//     { icon: <FaRegFile size={"24px"} />, text: "Drafts", link: "/drafts" },
//   ];

//   const [content, setContent] = useState(false);
//   const toggle = () => setContent(!content);

//   const [categories, setCategories] = useState(false);
//   const toggleC = () => setCategories(!categories);

//   const navOn = useSelector((state) => state.appSlice.sidebar);
//   const dispatch = useDispatch();
//   const isOpen = useSelector((store) => store.appSlice.open);

//   const navigateTo = (route) => {
//     // Navigate to the specified route
//     console.log("Navigating to:", route);
//     // Example: You can use react-router-dom history or Link to navigate
//   };

//   return (
//     <>
//       {navOn && (
//         <div className="w-[250px] bg-white h-screen shadow-lg rounded-[23px] overflow-y-scroll no-scrollbar ">
//           <div className="p-3">
//             <button
//               className="flex items-center gap-2 p-3 rounded-2xl bg-[#C2E7FF] hover:shadow-md"
//               onClick={() => dispatch(setOpen(true))}
//             >
//               <LuPencil size={"24px"} />
//               Compose
//             </button>
//             {isOpen && <SendMail />}
//           </div>
//           {/* VoiceCommands component */}
//           {/* <VoiceCommands handleVoiceCommand={handleVoiceCommand} /> */}
//           <div className="px-2 text-gray-900">
//             {sideBarItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
//               >
//                 <Link to={item.link} className="flex items-center gap-4">
//                   {item.icon}
//                   <p className="text-gray-900">{item.text}</p>
//                 </Link>
//               </div>
//             ))}
//             <div>
//               {!content ? (
//                 <div
//                   onClick={toggle}
//                   className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
//                 >
//                   <MdExpandMore size={"24px"} />
//                   <p className="text-gray-900">More</p>
//                 </div>
//               ) : (
//                 <div className="flex flex-col text-gray-900">
//                   <div
//                     onClick={toggle}
//                     className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1"
//                   >
//                     <MdExpandLess size={"24px"} />
//                     <p className="text-gray-900">Less</p>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <MdLabelImportantOutline size={"24px"} />
//                       <p className="text-gray-900">Important</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <IoChatboxEllipsesOutline size={"24px"} />
//                       <p className="text-gray-900">Chats</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <MdOutlineScheduleSend size={"24px"} />
//                       <p className="text-gray-900">Scheduled</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <LuMails size={"24px"} />
//                       <p className="text-gray-900">All Mail</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <RiSpam2Line size={"24px"} />
//                       <p className="text-gray-900">Spam</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <RiDeleteBin6Line size={"24px"} />
//                       <p className="text-gray-900">Bin</p>
//                     </Link>
//                   </div>
//                   <div
//                     className={`${
//                       !categories ? "rounded-r-full hover:bg-gray-200" : "gap-2"
//                     } p-2`}
//                   >
//                     <div
//                       className="flex items-center gap-2 cursor-pointer"
//                       onClick={toggleC}
//                     >
//                       <MdArrowRight size={"24px"} />
//                       <MdLabelOutline size={"24px"} />
//                       <p className="text-gray-900">Categories</p>
//                     </div>
//                     {categories && (
//                       <div className="flex flex-col">
//                         <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                           <Link to={"/"} className="flex items-center gap-4">
//                             <LuUsers size={"24px"} />
//                             <p className="text-gray-900">Social</p>
//                           </Link>
//                         </div>
//                         <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                           <Link to={"/"} className="flex items-center gap-4">
//                             <RiErrorWarningLine size={"24px"} />
//                             <p className="text-gray-900">Updates</p>
//                           </Link>
//                         </div>
//                         <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                           <Link to={"/"} className="flex items-center gap-4">
//                             <TiMessages size={"24px"} />
//                             <p className="text-gray-900">Forums</p>
//                           </Link>
//                         </div>
//                         <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                           <Link to={"/"} className="flex items-center gap-4">
//                             <BsTagsFill size={"24px"} />

//                             <p className="text-gray-900">Promotions</p>
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <IoSettingsOutline size={"24px"} />
//                       <p className="text-gray-900">Manage labels</p>
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//                     <Link to={"/"} className="flex items-center gap-4">
//                       <GoPlus size={"24px"} />
//                       <p className="text-gray-900">Create new label</p>
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center gap-4 p-2 rounded-r-full hover:bg-gray-200 cursor-pointer my-1">
//               <Link to={"/"} className="flex items-center gap-4">
//                 <p className="text-2xl text-gray-900">Labels</p>
//                 <GoPlus size={"36px"} className="rounded-full hover:p-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SideBar;
