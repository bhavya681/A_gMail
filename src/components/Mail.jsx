import { deleteDoc, doc } from "firebase/firestore";
import { BiArchive } from "react-icons/bi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowBack,
} from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailRead,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Mail = () => {
  const navigate = useNavigate();

  const myEmail = useSelector((state) => state.appSlice.selectedEmail);

  const params = useParams();

  const deleteMailById = async (id) => {
    try {
      const docRef = doc(db, "emails", id);
      await deleteDoc(docRef);
      toast.success("Message Successfully Deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-white mx-2 md:mx-5 ml-2 md:ml-4 rounded-xl h-[100%] overflow-hidden"
      >
        <div className="flex items-center justify-between px-2 md:px-4">
          <div className="flex items-center gap-1 md:gap-2 text-gray-700 py-2 flex-wrap">
            <div
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <IoMdArrowBack size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <BiArchive size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineReport size={"20px"} />
            </div>
            <div
              onClick={() => {
                deleteMailById(params.id);
              }}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <MdDeleteOutline size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineMarkEmailRead size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineWatchLater size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineAddTask size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineDriveFileMove size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={"20px"} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:rounded-full hover:bg-gray-100 p-2">
              <IoIosArrowBack size={"24px"} />
            </button>
            <button className="hover:rounded-full hover:bg-gray-100 p-2">
              {" "}
              <IoIosArrowForward size={"24px"} />
            </button>
          </div>
        </div>
        <div className="h-[90vh] overflow-y-auto p-2 md:p-4">
          <div className="flex items-center justify-between bg-white gap-1 flex-wrap">
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-md ">{myEmail?.subject}</h1>
              <span className="text-xs md:text-sm bg-gray-200 rounded-md px-2">Inbox</span>
            </div>
            <div className="text-gray-400 my-2 md:my-5 text-xs md:text-sm">
              <p>
                {new Date(myEmail?.createdAt?.seconds * 1000).toUTCString()}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-xs md:text-sm">
            <h1>{myEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-5 md:my-10">
            <p>{myEmail?.message}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Mail;
