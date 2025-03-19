import axios from "axios";
import { useState } from "react";
import { BotMessgeProps } from "../../types/global.types";

function useChatBot() {
  const [messages, setMessages] = useState<BotMessgeProps[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); 
  const [, setIsTyping] = useState(false); 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: BotMessgeProps = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");


    setIsTyping(true);
    setMessages((prevMessages) => [...prevMessages, { text: "Thinking...", sender: "bot" }]);

    setTimeout(async () => {
      try {
        const response = await axios.post("https://tunecycle.onrender.com/api/chatbot/", {
          message: input,
        });

        const botMessage: BotMessgeProps = { text: response.data.message, sender: "bot" };

        setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          newMessages.pop();
          return [...newMessages, botMessage];
        });

      } catch (error) {
        console.error("Chatbot error:", error);
        const errorMessage: BotMessgeProps = { text: "Sorry, something went wrong.", sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 2000); 
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    isOpen,
    setIsOpen,
  };
}

export default useChatBot;
