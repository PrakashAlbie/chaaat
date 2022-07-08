import { React, createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

export const ChatState = () => {
	return useContext(ChatContext);
};

const ChatProvider = ({ children }) => {
	const history = useHistory();
	const [user, setUser] = useState();
	const [selectedChat, setSelectedChat] = useState();
	const [chats, setChats] = useState([]);
	const [notification, setNotification] = useState([]);
	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem("userInfo"));
		setUser(userInfo);

		if (!userInfo) history.push("/");
	}, [history]);

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
			}}>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatProvider;
