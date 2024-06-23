// import { useEffect, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosSearch } from "react-icons/io";
// import { CiCircleQuestion } from "react-icons/ci";
// import { CiSettings } from "react-icons/ci";
// import { PiDotsNineBold } from "react-icons/pi";
// import Avatar from "react-avatar";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchText, setSidebar, setUser } from "../redux/appSlice";
// import { IoAddOutline } from "react-icons/io5";
// import { IoIosLogOut } from "react-icons/io";
// import { AnimatePresence, motion } from "framer-motion";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link } from "react-router-dom";
// import { VscRobot } from "react-icons/vsc";
// import EmailGenerator from "../EmailGenerator";

// const Navbar = () => {
//   const [inputText, setInputText] = useState("");
//   const dispatch = useDispatch();
//   const userProfile = useSelector((state) => state.appSlice.user);
//   const [toggle, setToggle] = useState(false);
//   const singnOutHandler = () => {
//     signOut(auth)
//       .then(() => {
//         dispatch(setUser(null));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     dispatch(setSearchText(inputText));
//   }, [inputText]);

//   const currStatusSB = useSelector((state) => state.appSlice.sidebar);

//   const [aiMssg, setAiMssg] = useState(false);

//   return (
//     <>
//       <div className="flex items-center justify-between mx-3 h-16">
//         <div className="flex items-center gap-10">
//           <div className="flex items-center gap-2">
//             <div className="p-3 rounded-full hover:Bg-gray-100 cursor-pointer">
//               <GiHamburgerMenu
//                 size={"20px"}
//                 onClick={() => {
//                   dispatch(setSidebar(!currStatusSB));
//                 }}
//               />
//             </div>
//             <img
//               className="w-8"
//               src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
//               alt="gmail-logo"
//             />
//             <h1 className="text-2xl text-gray-500 font-medium">
//               <Link to="/">Gmail</Link>
//             </h1>
//           </div>
//         </div>
//         <div className="md:block hidden w-[50%] mr-60 mt-5">
//           <div className="flex items-center  bg-[#EAF1FB] px-2 py-3 rounded-full">
//             <IoIosSearch size={"24px"} className="text-gray-700" />
//             <input
//               type="text"
//               value={inputText}
//               onChange={(e) => {
//                 setInputText(e.target.value);
//               }}
//               placeholder="Search Mail"
//               className="rounded-full w-full  outline-none px-1 bg-[#EAF1FB] placeholder:text-bold placeholder:text-gray-600"
//             />
//           </div>
//         </div>
//         <div className="md:block hidden">
//           <div className="flex items-center gap-2">
//             <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
//               <Link to="/email-gen">
//                 <VscRobot
//                   size={"22px"}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setAiMssg(!aiMssg);
//                   }}
//                 />
//               </Link>
//               {aiMssg && (
//                 <>
//                   <div className="relative top-14 right-[18rem] ">
//                     <EmailGenerator size={"25px"} />
//                   </div>
//                 </>
//               )}
//             </div>
//             <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <CiCircleQuestion size={"25px"} />
//             </div>
           
//             <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <CiSettings size={"25px"} />
//             </div>
//             <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
//               <PiDotsNineBold size={"25px"} />
//             </div>

//             <div className="relative cursor-pointer">
//               <Avatar
//                 onClick={() => {
//                   setToggle(!toggle);
//                 }}
//                 src={userProfile.photoURL}
//                 size="40"
//                 round={true}
//               />
//               <AnimatePresence>
//                 {toggle && (
//                   <>
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.8 }}
//                       transition={{ duration: 0.1 }}
//                       className="absolute top-14 right-10 bg-white shadow-lg shadow-gray-400 rounded-lg p-4 w-80 z-50"
//                     >
//                       <div className="flex flex-col justify-center text-center items-center gap-3 mb-4 p-1">
//                         <Avatar
//                           src={userProfile.photoURL}
//                           size="50"
//                           round={true}
//                           className="m-1"
//                         />
//                         <div>
//                           <h1 className="font-medium text-lg p-1">
//                             {userProfile.email}
//                           </h1>
//                           <h2 className="text-sm text-gray-600 p-1">
//                             Hi, {userProfile.displayName}!<br />
//                             <span className="m-1">
//                               {" "}
//                               Manage your Google Account
//                             </span>
//                           </h2>
//                         </div>
//                       </div>
//                       <div className="border-t border-gray-200 pt-4 flex">
//                         <a
//                           href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail&ddm=0&dsh=S-787934200:1718694431893194&ec=GAlAFw&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en-GB&service=mail&TL=AC3PFD5u2kNtBESDPHglD0HQTD3ADw9PN0hPFVifcjjQwDQT-ATsMl_C-smcWIaP"
//                           className="flex cursor-pointer items-center gap-2 w-full text-left text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md"
//                         >
//                           <IoAddOutline size={20} /> Add account
//                         </a>
//                         <p
//                           onClick={singnOutHandler}
//                           className="flex cursor-pointer items-center gap-2 w-full text-left text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md"
//                         >
//                           <IoIosLogOut size={20} /> Sign Out
//                         </p>
//                       </div>
//                       <div className="text-xs text-gray-500 mt-4 border-t border-gray-200 pt-4 text-center">
//                         <b>Privacy policy • Terms of service</b>
//                       </div>
//                     </motion.div>
//                   </>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setSidebar, setUser } from "../redux/appSlice";
import { IoAddOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { VscRobot } from "react-icons/vsc";
import EmailGenerator from "../EmailGenerator";

const Navbar = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.appSlice.user);
  const [toggle, setToggle] = useState(false);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(setSearchText(inputText));
  }, [inputText]);

  const currStatusSB = useSelector((state) => state.appSlice.sidebar);

  const [aiMssg, setAiMssg] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        {/* Left Section: Logo and Menu */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu
              size={"20px"}
              onClick={() => {
                dispatch(setSidebar(!currStatusSB));
              }}
            />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium hidden md:block">
            <Link to="/">Gmail</Link>
          </h1>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="hidden md:flex w-[50%] mx-6">
          <div className="flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full w-full">
            <IoIosSearch size={"24px"} className="text-gray-700" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              placeholder="Search Mail"
              className="bg-transparent w-full outline-none px-2 placeholder:text-bold placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Right Section: Icons and Avatar */}
        <div className="flex items-center gap-2">
          {/* Icons section for medium and larger screens */}
          <div className="hidden md:flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <Link to="/email-gen">
                <VscRobot
                  size={"22px"}
                  onClick={(e) => {
                    e.preventDefault();
                    setAiMssg(!aiMssg);
                  }}
                />
              </Link>
              {aiMssg && (
                <div className="relative top-14 right-[18rem]">
                  <EmailGenerator size={"25px"} />
                </div>
              )}
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiCircleQuestion size={"25px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiSettings size={"25px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <PiDotsNineBold size={"25px"} />
            </div>
          </div>

          {/* Avatar section */}
          <div className="relative cursor-pointer">
            <Avatar
              onClick={() => {
                setToggle(!toggle);
              }}
              src={userProfile.photoURL}
              size="40"
              round={true}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-14 right-0 bg-white shadow-lg rounded-lg p-4 w-80 z-50"
                >
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <Avatar
                      src={userProfile.photoURL}
                      size="50"
                      round={true}
                    />
                    <div>
                      <h1 className="font-medium text-lg">
                        {userProfile.email}
                      </h1>
                      <h2 className="text-sm text-gray-600">
                        Hi, {userProfile.displayName}!<br />
                        <span className="text-xs">Manage your Google Account</span>
                      </h2>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <a
                      href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail&ddm=0&dsh=S-787934200:1718694431893194&ec=GAlAFw&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en-GB&service=mail&TL=AC3PFD5u2kNtBESDPHglD0HQTD3ADw9PN0hPFVifcjjQwDQT-ATsMl_C-smcWIaP"
                      className="flex items-center gap-2 text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md"
                    >
                      <IoAddOutline size={20} /> Add account
                    </a>
                    <p
                      onClick={signOutHandler}
                      className="flex items-center gap-2 text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                    >
                      <IoIosLogOut size={20} /> Sign Out
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 mt-4 border-t border-gray-200 pt-4 text-center">
                    <b>Privacy policy • Terms of service</b>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden flex w-full px-4 py-2">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full w-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="Search Mail"
            className="bg-transparent w-full outline-none px-2 placeholder:text-bold placeholder:text-gray-600"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;


// import { useEffect, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosSearch } from "react-icons/io";
// import { CiCircleQuestion } from "react-icons/ci";
// import { CiSettings } from "react-icons/ci";
// import { PiDotsNineBold } from "react-icons/pi";
// import Avatar from "react-avatar";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchText, setSidebar, setUser } from "../redux/appSlice";
// import { IoAddOutline } from "react-icons/io5";
// import { IoIosLogOut } from "react-icons/io";
// import { AnimatePresence, motion } from "framer-motion";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link } from "react-router-dom";
// import { VscRobot } from "react-icons/vsc";
// import EmailGenerator from "../EmailGenerator";

// const Navbar = () => {
//   const [inputText, setInputText] = useState("");
//   const dispatch = useDispatch();
//   const userProfile = useSelector((state) => state.appSlice.user);
//   const [toggle, setToggle] = useState(false);
//   const signOutHandler = () => {
//     signOut(auth)
//       .then(() => {
//         dispatch(setUser(null));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     dispatch(setSearchText(inputText));
//   }, [inputText]);

//   const currStatusSB = useSelector((state) => state.appSlice.sidebar);

//   const [aiMssg, setAiMssg] = useState(false);

//   return (
//     <>
//       <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
//         <div className="flex items-center gap-2">
//           <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//             <GiHamburgerMenu
//               size={"20px"}
//               onClick={() => {
//                 dispatch(setSidebar(!currStatusSB));
//               }}
//             />
//           </div>
//           <img
//             className="w-8"
//             src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
//             alt="gmail-logo"
//           />
//           <h1 className="text-2xl text-gray-500 font-medium hidden md:block">
//             <Link to="/">Gmail</Link>
//           </h1>
//         </div>
//         <div className="hidden md:flex w-[50%] mx-6">
//           <div className="flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full w-full">
//             <IoIosSearch size={"24px"} className="text-gray-700" />
//             <input
//               type="text"
//               value={inputText}
//               onChange={(e) => {
//                 setInputText(e.target.value);
//               }}
//               placeholder="Search Mail"
//               className="bg-transparent w-full outline-none px-2 placeholder:text-bold placeholder:text-gray-600"
//             />
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="hidden md:flex items-center gap-2">
//             <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//               <Link to="/email-gen">
//                 <VscRobot
//                   size={"22px"}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setAiMssg(!aiMssg);
//                   }}
//                 />
//               </Link>
//               {aiMssg && (
//                 <div className="relative top-14 right-[18rem]">
//                   <EmailGenerator size={"25px"} />
//                 </div>
//               )}
//             </div>
//             <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//               <CiCircleQuestion size={"25px"} />
//             </div>
//             <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//               <CiSettings size={"25px"} />
//             </div>
//             <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
//               <PiDotsNineBold size={"25px"} />
//             </div>
//           </div>
//           <div className="relative cursor-pointer">
//             <Avatar
//               onClick={() => {
//                 setToggle(!toggle);
//               }}
//               src={userProfile.photoURL}
//               size="40"
//               round={true}
//             />
//             <AnimatePresence>
//               {toggle && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ duration: 0.1 }}
//                   className="absolute top-14 right-0 bg-white shadow-lg rounded-lg p-4 w-80 z-50"
//                 >
//                   <div className="flex flex-col items-center gap-3 mb-4">
//                     <Avatar
//                       src={userProfile.photoURL}
//                       size="50"
//                       round={true}
//                     />
//                     <div>
//                       <h1 className="font-medium text-lg">
//                         {userProfile.email}
//                       </h1>
//                       <h2 className="text-sm text-gray-600">
//                         Hi, {userProfile.displayName}!<br />
//                         <span className="text-xs">Manage your Google Account</span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="border-t border-gray-200 pt-4">
//                     <a
//                       href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail&ddm=0&dsh=S-787934200:1718694431893194&ec=GAlAFw&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en-GB&service=mail&TL=AC3PFD5u2kNtBESDPHglD0HQTD3ADw9PN0hPFVifcjjQwDQT-ATsMl_C-smcWIaP"
//                       className="flex items-center gap-2 text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md"
//                     >
//                       <IoAddOutline size={20} /> Add account
//                     </a>
//                     <p
//                       onClick={signOutHandler}
//                       className="flex items-center gap-2 text-sm text-gray-700 mb-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
//                     >
//                       <IoIosLogOut size={20} /> Sign Out
//                     </p>
//                   </div>
//                   <div className="text-xs text-gray-500 mt-4 border-t border-gray-200 pt-4 text-center">
//                     <b>Privacy policy • Terms of service</b>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Search Bar */}
//       <div className="md:hidden flex w-full px-4 py-2">
//         <div className="flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full w-full">
//           <IoIosSearch size={"24px"} className="text-gray-700" />
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => {
//               setInputText(e.target.value);
//             }}
//             placeholder="Search Mail"
//             className="bg-transparent w-full outline-none px-2 placeholder:text-bold placeholder:text-gray-600"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
