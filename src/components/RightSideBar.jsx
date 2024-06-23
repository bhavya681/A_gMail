// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiChevronLeft } from "react-icons/bi";
// import { SlCalender } from "react-icons/sl";
// import { SiGooglekeep } from "react-icons/si";
// import { TfiNotepad } from "react-icons/tfi";
// import { MdCurrencyExchange } from "react-icons/md";
// import { IoIosContacts } from "react-icons/io";
// import { GiCalculator } from "react-icons/gi";
// import { TiSocialAtCircular, TiSocialFlickrCircular } from "react-icons/ti";
// import {
//   MdOutlineAttachEmail,
//   MdOutlineAttachFile,
//   MdOutlineContactPhone,
// } from "react-icons/md";
// import { SiAmazonsimpleemailservice } from "react-icons/si";
// import { AiOutlineTranslation } from "react-icons/ai";

// const RightSideBar = () => {
//   const tools = [
//     { name: "Calendar", path: "/calendar", icon: <SlCalender size={"20px"} /> },
//     { name: "Keep", path: "/keep", icon: <SiGooglekeep size={"20px"} /> },
//     {
//       name: "Calculator",
//       path: "/calculator",
//       icon: <GiCalculator size={"20px"} />,
//     },
//     { name: "Notes", path: "/tasks", icon: <TfiNotepad size={"20px"} /> },
//     {
//       name: "Currency Converter",
//       path: "/currency-converter",
//       icon: <MdCurrencyExchange size={"20px"} />,
//     },
//     {
//       name: "Language Translation",
//       path: "/language-translate",
//       icon: <AiOutlineTranslation size={"20px"} />,
//     },
//     {
//       name: "Phone Verfication",
//       path: "/phone-verify",
//       icon: <MdOutlineContactPhone size={"20px"} />,
//     },
//     {
//       name: "Email Verfication",
//       path: "/email-verify",
//       icon: <MdOutlineAttachEmail size={"20px"} />,
//     },
//     {
//       name: "Social Data",
//       path: "/social-data",
//       icon: <TiSocialFlickrCircular size={"20px"} />,
//     },
//     {
//       name: "Email Compose",
//       path: "/email-compose",
//       icon: <SiAmazonsimpleemailservice size={"20px"} />,
//     },
//     {
//       name: "Attachment Management",
//       path: "/attachment-manage",
//       icon: <MdOutlineAttachFile size={"20px"} />,
//     },
//   ];

//   const [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <button className="border-none outline-none absolute bottom-8 right-1">
//         <BiChevronLeft
//           size={"26px"}
//           className="mr-6 shadow-xl shadow-gray-500 rounded-full hover:bg-gray-300"
//           onClick={() => {
//             setToggle(!toggle);
//           }}
//         />
//       </button>

//       {toggle && (
//         <div className="w-64 bg-white p-4 shadow-lg border-l rounded-xl overflow-y-scroll h-full">
//           <h2 className="text-lg font-semibold mb-4">Tools</h2>
//           <nav className="flex flex-col gap-2">
//             {tools.map((tool) => (
//               <Link
//                 key={tool.name}
//                 to={tool.path}
//                 className="text-blue-500 hover:underline flex gap-3"
//               >
//                 {tool.icon}
//                 <span className="text-black">{tool.name}</span>
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default RightSideBar;





import { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { SiGooglekeep } from "react-icons/si";
import { TfiNotepad } from "react-icons/tfi";
import { MdCurrencyExchange } from "react-icons/md";
import { AiOutlineTranslation } from "react-icons/ai";
import { MdOutlineAttachEmail, MdOutlineAttachFile, MdOutlineContactPhone } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GiCalculator } from "react-icons/gi";
import { TiSocialFlickrCircular } from "react-icons/ti";

const RightSideBar = () => {
  const tools = [
    { name: "Calendar", path: "/calendar", icon: <SlCalender size={"20px"} /> },
    { name: "Keep", path: "/keep", icon: <SiGooglekeep size={"20px"} /> },
    { name: "Calculator", path: "/calculator", icon: <GiCalculator size={"20px"} /> },
    { name: "Notes", path: "/tasks", icon: <TfiNotepad size={"20px"} /> },
    { name: "Currency Converter", path: "/currency-converter", icon: <MdCurrencyExchange size={"20px"} /> },
    { name: "Language Translation", path: "/language-translate", icon: <AiOutlineTranslation size={"20px"} /> },
    { name: "Phone Verification", path: "/phone-verify", icon: <MdOutlineContactPhone size={"20px"} /> },
    { name: "Email Verification", path: "/email-verify", icon: <MdOutlineAttachEmail size={"20px"} /> },
    { name: "Social Data", path: "/social-data", icon: <TiSocialFlickrCircular size={"20px"} /> },
    { name: "Email Compose", path: "/email-compose", icon: <SiAmazonsimpleemailservice size={"20px"} /> },
    { name: "Attachment Management", path: "/attachment-manage", icon: <MdOutlineAttachFile size={"20px"} /> },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="fixed bottom-8 right-1 z-50">
        <BiChevronLeft
          size={"26px"}
          className="shadow-xl shadow-gray-500 rounded-full hover:bg-gray-300"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg border-l rounded-xl p-4 overflow-y-scroll transition-transform duration-300 ${
          toggle ? 'translate-x-0' : 'translate-x-full'
        } md:w-64 w-full z-40`}
      >
        <h2 className="text-lg font-semibold mb-4">Tools</h2>
        <nav className="flex flex-col gap-2">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.path}
              className="text-blue-500 hover:underline flex gap-3 items-center"
              onClick={() => setToggle(false)}
            >
              {tool.icon}
              <span className="text-black">{tool.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default RightSideBar;
