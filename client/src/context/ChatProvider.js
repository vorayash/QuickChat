import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
//   {
//     "user": {
//         "_id": "644d515018e92a14bbacafe8",
//         "name": "Yash Vora",
//         "email": "vorayash9028@gmail.com",
//         "password": "",
//         "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
//         "createdAt": "2023-04-29T17:18:08.558Z",
//         "updatedAt": "2023-04-29T17:18:08.558Z",
//         "__v": 0
//     },
//     "message": "user successfully logged in",
//     "token": ""
// }
  const [user, setUser] = useState();
  // {
  //   "_id": "645a7cce390885bad1afc71c",
  //   "chatName": "sender",
  //   "isGroupChat": false,
  //   "users": [
  //     {
  //       "_id": "644d515018e92a14bbacafe8",
  //       "name": "Yash Vora",
  //       "email": "vorayash9028@gmail.com",
  //       "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
  //       "createdAt": "2023-04-29T17:18:08.558Z",
  //       "updatedAt": "2023-04-29T17:18:08.558Z",
  //       "__v": 0
  //     },
  //     {
  //       "_id": "645a7c0a6bf0c9df06e96fcb",
  //       "name": "Kunal Parmar",
  //       "email": "kunal@gmail.com",
  //       "image": "http://res.cloudinary.com/ddayasqsp/image/upload/v1683651589/profile_pic/k3dkfdxi7xyrsoqkieq2.png",
  //       "createdAt": "2023-059-09T16:59:54.611Z",
  //       "updatedAt": "2023-05-09T16:59:54.611Z",
  //       "__v": 0
  //     }
  //   ],
  //   "createdAt": "2023-05-09T17:03:10.912Z",
  //   "updatedAt": "2023-05-09T17:03:10.912Z",
  //   "__v": 0
  // }
  const [selectedChat, setSelectedChat] = useState();

//   [
//     {
//         "_id": "644e312f06f9962dabea649e",
//         "chatName": "team",
//         "isGroupChat": true,
//         "users": [
//             {
//                 "_id": "644d515018e92a14bbacafe8",
//                 "name": "Yash Vora",
//                 "email": "vorayash9028@gmail.com",
//                 "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
//                 "createdAt": "2023-04-29T17:18:08.558Z",
//                 "updatedAt": "2023-04-29T17:18:08.558Z",
//                 "__v": 0
//             },
//             {
//                 "_id": "644d523318e92a14bbacaff3",
//                 "name": "Dip Vekariya",
//                 "email": "dipvekariya26@gmail.com",
//                 "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788914/b6sfwvpagsqqhp4c8vds.jpg",
//                 "createdAt": "2023-04-29T17:21:55.032Z",
//                 "updatedAt": "2023-04-29T17:21:55.032Z",
//                 "__v": 0
//             }
//         ],
//         "groupAdmin": {
//             "_id": "644d515018e92a14bbacafe8",
//             "name": "Yash Vora",
//             "email": "vorayash9028@gmail.com",
//             "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
//             "createdAt": "2023-04-29T17:18:08.558Z",
//             "updatedAt": "2023-04-29T17:18:08.558Z",
//             "__v": 0
//         },
//         "createdAt": "2023-04-30T09:13:19.676Z",
//         "updatedAt": "2023-05-09T17:06:09.008Z",
//         "__v": 0,
//         "latestMessage": {
//             "_id": "645a7d4c390885bad1afc73d",
//             "sender": {
//                 "_id": "644d515018e92a14bbacafe8",
//                 "name": "Yash Vora",
//                 "email": "vorayash9028@gmail.com"
//             },
//             "content": "hii",
//             "chatId": "644e312f06f9962dabea649e",
//             "createdAt": "2023-05-09T17:05:16.267Z",
//             "updatedAt": "2023-05-09T17:05:16.267Z",
//             "__v": 0
//         }
//     },
//     {
//         "_id": "645a7cce390885bad1afc71c",
//         "chatName": "sender",
//         "isGroupChat": false,
//         "users": [
//             {
//                 "_id": "644d515018e92a14bbacafe8",
//                 "name": "Yash Vora",
//                 "email": "vorayash9028@gmail.com",
//                 "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
//                 "createdAt": "2023-04-29T17:18:08.558Z",
//                 "updatedAt": "2023-04-29T17:18:08.558Z",
//                 "__v": 0
//             },
//             {
//                 "_id": "645a7c0a6bf0c9df06e96fcb",
//                 "name": "Kunal Parmar",
//                 "email": "kunal@gmail.com",
//                 "image": "http://res.cloudinary.com/ddayasqsp/image/upload/v1683651589/profile_pic/k3dkfdxi7xyrsoqkieq2.png",
//                 "createdAt": "2023-05-09T16:59:54.611Z",
//                 "updatedAt": "2023-05-09T16:59:54.611Z",
//                 "__v": 0
//             }
//         ],
//         "createdAt": "2023-05-09T17:03:10.912Z",
//         "updatedAt": "2023-05-09T17:03:10.912Z",
//         "__v": 0
//     },
//     {
//         "_id": "644d523d18e92a14bbacaffd",
//         "chatName": "sender",
//         "isGroupChat": false,
//         "users": [
//             {
//                 "_id": "644d523318e92a14bbacaff3",
//                 "name": "Dip Vekariya",
//                 "email": "dipvekariya26@gmail.com",
//                 "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788914/b6sfwvpagsqqhp4c8vds.jpg",
//                 "createdAt": "2023-04-29T17:21:55.032Z",
//                 "updatedAt": "2023-04-29T17:21:55.032Z",
//                 "__v": 0
//             },
//             {
//                 "_id": "644d515018e92a14bbacafe8",
//                 "name": "Yash Vora",
//                 "email": "vorayash9028@gmail.com",
//                 "image": "http://res.cloudinary.com/dfcaehp0b/image/upload/v1682788687/gfagsdj5o1eq8jidmzzn.png",
//                 "createdAt": "2023-04-29T17:18:08.558Z",
//                 "updatedAt": "2023-04-29T17:18:08.558Z",
//                 "__v": 0
//             }
//         ],
//         "createdAt": "2023-04-29T17:22:05.202Z",
//         "updatedAt": "2023-04-29T17:51:50.342Z",
//         "__v": 0,
//         "latestMessage": {
//             "_id": "644d593618e92a14bbacb03b",
//             "sender": {
//                 "_id": "644d515018e92a14bbacafe8",
//                 "name": "Yash Vora",
//                 "email": "vorayash9028@gmail.com"
//             },
//             "content": "dfsdfsdfsdfsdfsdfsdfsdfwefsfsf",
//             "chatId": "644d523d18e92a14bbacaffd",
//             "createdAt": "2023-04-29T17:51:50.019Z",
//             "updatedAt": "2023-04-29T17:51:50.019Z",
//             "__v": 0
//         }
//     }
// ]
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("quickChatUser"));
    setUser(userInfo);
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
