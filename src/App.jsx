/*

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Inbox from "./components/Inbox";
import Starred from "./components/Starred";
import Snozzed from "./components/Snozzed";
import Sent from "./components/Sent";
import Drafts from "./components/Drafts";
import Mail from "./components/Mail";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import RightSideBar from "./components/RightSideBar";
import Calendar from "./components/Calender";
import Contacts from "./components/Contacts";
import Keep from "./components/Keep";
import Tasks from "./components/Tasks";
import CurrencyConverter from "./components/CurrencyConvertor";
import Calculator from "./components/Calculator";
import EmailAnalytics from "./components/EmailAnalytics";
import SocialMediaUpdates from "./components/SocialMediaUpdates";
import PhoneVerification from "./components/PhoneVerfication";
import EmailVerification from "./components/EmailVerfication";
import EmailComposer from "./components/EmailComposer";
import AttachmentManager from "./components/AttachmentManager";

const App = () => {
  const user = useSelector((state) => state.appSlice.user);

  return (
    <div className="bg-[#F6F8FC] h-screen overflow-hidden flex flex-col">
      <Router>
        {user && <Navbar />}
        <div className="flex flex-1">
          {user && (
            <div className="hidden md:flex">
              <SideBar />
            </div>
          )}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            <div className="flex-1 overflow-auto p-4">
              <Toaster />
              <Routes>
                {!user ? (
                  <>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<Inbox />} />
                    <Route path="/mail/:id" element={<Mail />} />
                    <Route path="/starred" element={<Starred />} />
                    <Route path="/snoozed" element={<Snozzed />} />
                    <Route path="/sent" element={<Sent />} />
                    <Route path="/drafts" element={<Drafts />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/keep" element={<Keep />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route
                      path="/currency-converter"
                      element={<CurrencyConverter />}
                    />
                    <Route
                      path="/email-analytics"
                      element={<EmailAnalytics />}
                    />
                    <Route
                      path="/language-translate"
                      element={<SocialMediaUpdates />}
                    />
                    <Route
                      path="/phone-verify"
                      element={<PhoneVerification />}
                    />
                    <Route
                      path="/email-verify"
                      element={<EmailVerification />}
                    />
                    <Route path="/social-data" element={<EmailAnalytics />} />
                    <Route path="/email-compose" element={<EmailComposer />} />
                    <Route
                      path="/attachment-manage"
                      element={<AttachmentManager />}
                    />
                  </>
                )}
              </Routes>
            </div>
            {user && (
              <div className="hidden md:block">
                <RightSideBar />
              </div>
            )}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

*/




import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Inbox from "./components/Inbox";
import Starred from "./components/Starred";
import Snozzed from "./components/Snozzed";
import Sent from "./components/Sent";
import Drafts from "./components/Drafts";
import Mail from "./components/Mail";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import RightSideBar from "./components/RightSideBar";
import Calendar from "./components/Calender";
import Contacts from "./components/Contacts";
import Keep from "./components/Keep";
import Tasks from "./components/Tasks";
import CurrencyConverter from "./components/CurrencyConvertor";
import Calculator from "./components/Calculator";
import EmailAnalytics from "./components/EmailAnalytics";
import SocialMediaUpdates from "./components/SocialMediaUpdates";
import PhoneVerification from "./components/PhoneVerfication";
import EmailVerification from "./components/EmailVerfication";
import EmailComposer from "./components/EmailComposer";
import AttachmentManager from "./components/AttachmentManager";

const App = () => {
  const user = useSelector((state) => state.appSlice.user);

  return (
    <div className="bg-[#F6F8FC] min-h-screen overflow-hidden flex flex-col">
      <Router>
        {user && <Navbar />}
        <div className="flex flex-1">
          {user && (
            <div className="block md:w-1/4 lg:w-1/5"> {/* Sidebar for medium and large screens */}
              <SideBar />
            </div>
          )}
          <div className="flex-1 flex flex-col md:overflow-hidden w-full">
            <div className="flex-1 overflow-auto p-4">
              <Toaster />
              <Routes>
                {!user ? (
                  <>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<Inbox />} />
                    <Route path="/mail/:id" element={<Mail />} />
                    <Route path="/starred" element={<Starred />} />
                    <Route path="/snoozed" element={<Snozzed />} />
                    <Route path="/sent" element={<Sent />} />
                    <Route path="/drafts" element={<Drafts />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/keep" element={<Keep />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route
                      path="/currency-converter"
                      element={<CurrencyConverter />}
                    />
                    <Route
                      path="/email-analytics"
                      element={<EmailAnalytics />}
                    />
                    <Route
                      path="/language-translate"
                      element={<SocialMediaUpdates />}
                    />
                    <Route
                      path="/phone-verify"
                      element={<PhoneVerification />}
                    />
                    <Route
                      path="/email-verify"
                      element={<EmailVerification />}
                    />
                    <Route path="/social-data" element={<EmailAnalytics />} />
                    <Route path="/email-compose" element={<EmailComposer />} />
                    <Route
                      path="/attachment-manage"
                      element={<AttachmentManager />}
                    />
                  </>
                )}
              </Routes>
            </div>
            {user && (
              <div className="hidden md:block w-1/4 lg:w-1/5"> {/* Right sidebar for medium and large screens */}
                <RightSideBar />
              </div>
            )}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;




// import Navbar from "./components/Navbar";
// import SideBar from "./components/SideBar";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Inbox from "./components/Inbox";
// import Starred from "./components/Starred";
// import Snozzed from "./components/Snozzed";
// import Sent from "./components/Sent";
// import Drafts from "./components/Drafts";
// import Mail from "./components/Mail";
// import { Toaster } from "react-hot-toast";
// import Login from "./components/Login";
// import { useSelector } from "react-redux";
// import RightSideBar from "./components/RightSideBar";
// import Calendar from "./components/Calender";
// import Contacts from "./components/Contacts";
// import Keep from "./components/Keep";
// import Tasks from "./components/Tasks";
// import CurrencyConverter from "./components/CurrencyConvertor";
// import Calculator from "./components/Calculator";
// import EmailAnalytics from "./components/EmailAnalytics";
// import SocialMediaUpdates from "./components/SocialMediaUpdates";
// import PhoneVerification from "./components/PhoneVerfication";
// import EmailVerification from "./components/EmailVerfication";
// import EmailComposer from "./components/EmailComposer";
// import AttachmentManager from "./components/AttachmentManager";

// const App = () => {
//   const user = useSelector((state) => state.appSlice.user);

//   return (
//     <div className="bg-[#F6F8FC] min-h-screen overflow-hidden flex flex-col">
//       <Router>
//         {user && <Navbar />}
//         <div className="flex flex-1">
//           {user && (
//             <div className="block md:block w-1/1"> {/* Show sidebar on mobile */}
//               <SideBar />
//             </div>
//           )}
//           <div className="flex-1 flex flex-col md:flex-col overflow-hidden w-[80%]">
//             <div className="flex-1 overflow-auto p-4">
//               <Toaster />
//               <Routes>
//                 {!user ? (
//                   <>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="*" element={<Navigate to="/login" />} />
//                   </>
//                 ) : (
//                   <>
//                     <Route path="/" element={<Inbox />} />
//                     <Route path="/mail/:id" element={<Mail />} />
//                     <Route path="/starred" element={<Starred />} />
//                     <Route path="/snoozed" element={<Snozzed />} />
//                     <Route path="/sent" element={<Sent />} />
//                     <Route path="/drafts" element={<Drafts />} />
//                     <Route path="*" element={<Navigate to="/" />} />
//                     <Route path="/calendar" element={<Calendar />} />
//                     <Route path="/calculator" element={<Calculator />} />
//                     <Route path="/contacts" element={<Contacts />} />
//                     <Route path="/keep" element={<Keep />} />
//                     <Route path="/tasks" element={<Tasks />} />
//                     <Route
//                       path="/currency-converter"
//                       element={<CurrencyConverter />}
//                     />
//                     <Route
//                       path="/email-analytics"
//                       element={<EmailAnalytics />}
//                     />
//                     <Route
//                       path="/language-translate"
//                       element={<SocialMediaUpdates />}
//                     />
//                     <Route
//                       path="/phone-verify"
//                       element={<PhoneVerification />}
//                     />
//                     <Route
//                       path="/email-verify"
//                       element={<EmailVerification />}
//                     />
//                     <Route path="/social-data" element={<EmailAnalytics />} />
//                     <Route path="/email-compose" element={<EmailComposer />} />
//                     <Route
//                       path="/attachment-manage"
//                       element={<AttachmentManager />}
//                     />
//                   </>
//                 )}
//               </Routes>
//             </div>
//             {user && (
//               <div className="hidden md:block flex-shrink-0 w-80"> {/* Right sidebar for desktop */}
//                 <RightSideBar />
//               </div>
//             )}
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default App;
