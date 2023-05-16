import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";
import { Tooltip, Avatar } from "@chakra-ui/react";
import { getSender } from "../config/ChatLogics";
import styles from "./ScrollableChat.module.css";

const ScrollableChat = ({ messages, isTyping }) => {
  const { user, selectedChat } = ChatState();
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((message, index) => (
          <div style={{ display: "flex" }} key={message._id}>
            {(isSameSender(messages, message, index, user.user._id) ||
              isLastMessage(messages, index, user.user._id)) && (
              <Tooltip
                label={message.sender.name}
                placement="bottom-start"
                hasArrow
              >
                <Avatar
                  mt="20px"
                  mr="1"
                  size="xs"
                  cursor="pointer"
                  name={message.sender.name}
                  src={message.sender.image}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor:
                  message.sender._id === user.user._id ? "#bee3f8" : "#b9f5d0",
                borderRadius:
                  message.sender._id !== user.user._id
                    ? "0.8rem 0.8rem 0.8rem 0"
                    : "0.8rem 0.8rem 0 0.8rem",
                padding: "0.5rem 1rem",
                maxWidth: "66%",
                marginLeft: isSameSenderMargin(
                  messages,
                  message,
                  index,
                  user.user._id
                ),
                marginTop: isSameUser(messages, message, index, user.user._id)
                  ? 3
                  : 10,
              }}
            >
              {message.content}
            </span>
          </div>
        ))}
      {isTyping && (
        <div style={{ display: "flex" }}>
          <Tooltip
            // label
            placement="bottom-start"
            hasArrow
          >
            <Avatar
              mt="20px"
              mr="1"
              size="xs"
              cursor="pointer"
              name={getSender(user.user, selectedChat.users).name}
              src={getSender(user.user, selectedChat.users).image}
            />
          </Tooltip>
          <span
            style={{
              backgroundColor: "#b9f5d0",
              borderRadius: "0.8rem 0.8rem 0.8rem 0",
              padding: "0.5rem 1rem",
              maxWidth: "66%",
              marginLeft: 0,
              marginTop: 10,
            }}
          >
            <div className={styles.typing}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </span>
        </div>
      )}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
