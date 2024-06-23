/*
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { FaCaretDown } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaGoogleDrive } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdOutlineLockClock } from "react-icons/md";
import { PiTextAUnderline } from "react-icons/pi";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";

const SendMail = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));
    toast.success("Successfully Send Message");
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md w-[38%] h-[60%] absolute right-20 bottom-0 z-10">
        <div className="flex px-3 py-2 bg-[#F2F6FC] p-1 justify-between rounded-t-md">
          <h1 className="bg-[#F2F6FC] p-1 font-bold font-sans text-lg">
            New Message
          </h1>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
            <RxCross2
              size={"20px"}
              onClick={() => {
                dispatch(setOpen(false));
              }}
            />
          </div>{" "}
        </div>
        <form className="flex flex-col p-3 gap-2" onSubmit={submitHandler}>
          <input
            name="to"
            value={formData.to}
            onChange={changeHandler}
            type="text"
            placeholder="Recipients"
            className="outline-none py-1"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={changeHandler}
            placeholder="Subject"
            className="outline-none py-1"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={changeHandler}
            cols={"30"}
            rows={"10"}
            className="outline-none py-1"
            placeholder=""
          ></textarea>

          <div className="flex shadow-2xl shadow-gray-800 rounded-sm  hover:bg-blue-700">
            <div className="absolute bottom-2 flex bg-[#0B57D0] rounded-full hover:cursor-pointer">
              <button
                type={"submit"}
                className="rounded-full py-1 w-fit px-5 text-lg text-white font-medium bg-[#0B57D0]"
              >
                Send
              </button>
              <nav className="border-l border-black p-2">
                <FaCaretDown
                  size={"27px"}
                  className="text-blue-200 p-1 hover:cursor-pointer hover:shadow-gray-400 "
                />
              </nav>
            </div>
            <div className="flex justify-center items-center">
              <nav className="flex gap-6 absolute bottom-2 right-[199px] pb-2 items-start text-center justify-start">
                <PiTextAUnderline
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <IoMdLink
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <MdOutlineEmojiEmotions
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <FaGoogleDrive
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <GrGallery
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <MdOutlineLockClock
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <FaPenAlt
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
                <HiOutlineDotsVertical
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200"
                />
              </nav>
              <div className="absolute bottom-2 right-4 pb-2 flex  hover:cursor-pointer hover:shadow-gray-400  hover:rounded-full hover:bg-gray-200">
                <RiDeleteBin6Line
                  size={"26px"}
                  className="text-center items-center p-1  hover:cursor-pointer hover:shadow-gray-600 hover:rounded-full hover:bg-gray-200"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendMail;
*/



import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { FaCaretDown } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaGoogleDrive } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdOutlineLockClock } from "react-icons/md";
import { PiTextAUnderline } from "react-icons/pi";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

const SendMail = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const [undoTimeout, setUndoTimeout] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendCancelled, setSendCancelled] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendCancelled(false);

    const timeoutId = setTimeout(async () => {
      if (!sendCancelled) {
        await addDoc(collection(db, "emails"), {
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          createdAt: serverTimestamp(),
        });
        dispatch(setOpen(false));
        toast.success("Successfully Sent Message");
        setFormData({
          to: "",
          subject: "",
          message: "",
        });
      }
      setIsSending(false);
    }, 3000); // 3 seconds delay

    setUndoTimeout(timeoutId);
    toast(
      (t) => (
        <span>
          Message will be sent in 5 seconds.
          <button
            onClick={() => {
              clearTimeout(timeoutId);
              setSendCancelled(true);
              toast.dismiss(t.id);
              setIsSending(false);
              dispatch(setOpen(false));
              toast.success("Message sending cancelled");
            }}
            style={{ marginLeft: "10px", color: "blue" }}
          >
            Undo
          </button>
        </span>
      ),
      { duration: 5000 }
    );
  };

  return (
    <>
      <Toaster />
      <div className="bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md  w-[70%] md:w-[38%] h-[56%] md:h-[60%] absolute right-6 md:right-20 bottom-0 z-10">
        <div className="flex px-3 py-2 bg-[#F2F6FC] p-1 justify-between rounded-t-md">
          <h1 className="bg-[#F2F6FC] p-1 font-bold font-sans text-lg">
            New Message
          </h1>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
            <RxCross2
              size={"20px"}
              onClick={() => {
                dispatch(setOpen(false));
              }}
            />
          </div>
        </div>
        <form className="flex flex-col p-3 gap-2" onSubmit={submitHandler}>
          <input
            name="to"
            value={formData.to}
            onChange={changeHandler}
            type="text"
            placeholder="Recipients"
            className="outline-none py-1"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={changeHandler}
            placeholder="Subject"
            className="outline-none py-1"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={changeHandler}
            cols={"30"}
            rows={"10"}
            className="outline-none py-1 resize-none"
            placeholder=""
          ></textarea>

          <div className="flex flex-wrap items-center justify-between mt-2">
            <button
              type="submit"
              className="rounded-full py-1 px-5 text-lg text-white font-medium bg-[#0B57D0] hover:bg-blue-700"
              disabled={isSending}
            >
              Send
            </button>
            <FaCaretDown
              size={"27px"}
              className="text-blue-200 p-1 hover:cursor-pointer hover:shadow-gray-400 ml-2"
            />
            <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
              <PiTextAUnderline
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <IoMdLink
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <MdOutlineEmojiEmotions
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <FaGoogleDrive
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <GrGallery
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <MdOutlineLockClock
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <FaPenAlt
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <HiOutlineDotsVertical
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
              <RiDeleteBin6Line
                size={"26px"}
                className="text-gray-700 p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendMail;

// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import { useDispatch } from "react-redux";
// import { setOpen } from "../redux/appSlice";
// import { FaCaretDown } from "react-icons/fa";
// import { IoMdLink } from "react-icons/io";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { MdOutlineEmojiEmotions } from "react-icons/md";
// import { FaGoogleDrive } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
// import { MdOutlineLockClock } from "react-icons/md";
// import { PiTextAUnderline } from "react-icons/pi";
// import { FaPenAlt } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase";
// import toast, { Toaster } from "react-hot-toast";

// const SendMail = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     to: "",
//     subject: "",
//     message: "",
//   });

//   const [undoTimeout, setUndoTimeout] = useState(null);
//   const [isSending, setIsSending] = useState(false);
//   const [sendCancelled, setSendCancelled] = useState(false);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setSendCancelled(false);

//     const timeoutId = setTimeout(async () => {
//       if (!sendCancelled) {
//         await addDoc(collection(db, "emails"), {
//           to: formData.to,
//           subject: formData.subject,
//           message: formData.message,
//           createdAt: serverTimestamp(),
//         });
//         dispatch(setOpen(false));
//         toast.success("Successfully Sent Message");
//         setFormData({
//           to: "",
//           subject: "",
//           message: "",
//         });
//       }
//       setIsSending(false);
//     }, 3000); // 3 seconds delay

//     setUndoTimeout(timeoutId);
//     toast(
//       (t) => (
//         <span>
//           Message will be sent in 5 seconds.
//           <button
//             onClick={() => {
//               clearTimeout(timeoutId);
//               setSendCancelled(true);
//               toast.dismiss(t.id);
//               setIsSending(false);
//               dispatch(setOpen(false));
//               toast.success("Message sending cancelled");
//             }}
//             style={{ marginLeft: "10px", color: "blue" }}
//           >
//             Undo
//           </button>
//         </span>
//       ),
//       { duration: 5000 }
//     );
//   };

//   return (
//     <>
//       <Toaster />
//       <div className="bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md w-[38%] h-[60%] absolute right-20 bottom-0 z-10">
//         <div className="flex px-3 py-2 bg-[#F2F6FC] p-1 justify-between rounded-t-md">
//           <h1 className="bg-[#F2F6FC] p-1 font-bold font-sans text-lg">
//             New Message
//           </h1>
//           <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
//             <RxCross2
//               size={"20px"}
//               onClick={() => {
//                 dispatch(setOpen(false));
//               }}
//             />
//           </div>
//         </div>
//         <form className="flex flex-col p-3 gap-2" onSubmit={submitHandler}>
//           <input
//             name="to"
//             value={formData.to}
//             onChange={changeHandler}
//             type="text"
//             placeholder="Recipients"
//             className="outline-none py-1"
//           />
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={changeHandler}
//             placeholder="Subject"
//             className="outline-none py-1"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={changeHandler}
//             cols={"30"}
//             rows={"10"}
//             className="outline-none py-1"
//             placeholder=""
//           ></textarea>

//           <div className="flex shadow-2xl shadow-gray-800 rounded-sm hover:bg-blue-700">
//             <div className="absolute bottom-2 flex bg-[#0B57D0] rounded-full hover:cursor-pointer">
//               <button
//                 type="submit"
//                 className="rounded-full py-1 w-fit px-5 text-lg text-white font-medium bg-[#0B57D0]"
//                 disabled={isSending}
//               >
//                 Send
//               </button>
//               <nav className="border-l border-black p-2">
//                 <FaCaretDown
//                   size={"27px"}
//                   className="text-blue-200 p-1 hover:cursor-pointer hover:shadow-gray-400 "
//                 />
//               </nav>
//             </div>
//             <div className="flex justify-center items-center">
//               <nav className="flex gap-6 absolute bottom-2 right-[199px] pb-2 items-start text-center justify-start">
//                 <PiTextAUnderline
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <IoMdLink
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <MdOutlineEmojiEmotions
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <FaGoogleDrive
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <GrGallery
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <MdOutlineLockClock
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <FaPenAlt
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//                 <HiOutlineDotsVertical
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200"
//                 />
//               </nav>
//               <div className="absolute bottom-2 right-4 pb-2 flex hover:cursor-pointer hover:shadow-gray-400 hover:rounded-full hover:bg-gray-200">
//                 <RiDeleteBin6Line
//                   size={"26px"}
//                   className="text-center items-center p-1 hover:cursor-pointer hover:shadow-gray-600 hover:rounded-full hover:bg-gray-200"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SendMail;

