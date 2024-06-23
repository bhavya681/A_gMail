import Message from "./Message";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const Emails = useSelector((state) => state.appSlice.emails);
  const [tempEmails, setTempEmail] = useState(Emails);
  const searchTxt = useSelector((state) => state.appSlice.searchText);

  useEffect(() => {
    const Q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(Q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    //cleanup
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filteredEmail = Emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchTxt.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchTxt.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchTxt.toLowerCase())
      );
    });
    setTempEmail(filteredEmail);
  }, [searchTxt, Emails]);

  return (
    <div className="p-2 md:p-4 lg:p-6">
      {tempEmails &&
        tempEmails.map((email, index) => (
          <div key={index} className="mb-2">
            <Message email={email} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
