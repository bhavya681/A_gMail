import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from "framer-motion";

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={openMail}
        className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 px-2 md:px-4 py-2 md:py-3 text-sm hover:cursor-pointer hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex-none text-gray-300">
            <MdCropSquare className="w-5 h-5" />
          </div>
          <div className="flex-none text-gray-300">
            <RiStarLine className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 mt-2 md:mt-0 md:ml-4">
          <p className="text-gray-600 truncate hover:cursor-pointer">
            {email?.message?.slice(0, 140)}
          </p>
        </div>
        <div className="flex-none text-gray-400 text-xs md:text-sm mt-2 md:mt-0">
          <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
        </div>
      </motion.div>
    </>
  );
};

export default Message;

