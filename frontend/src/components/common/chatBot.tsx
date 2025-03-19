import { useEffect, useRef } from "react";
import useChatBot from "../../hooks/useChatBot";
import Image from "next/image";
import {motion} from 'framer-motion'


function ChatBot() {
  const { messages, input, setInput, sendMessage, isOpen, setIsOpen } = useChatBot();
  const chatRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen,setIsOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">

      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/images/robot.png" alt="bot" width={80} height={80} />
      </div>


      {isOpen && (
  <motion.div
    ref={chatRef}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    className="fixed bottom-20 right-5 bg-[#252B36] text-white p-5 rounded-lg shadow-lg w-80 z-50 flex flex-col"
  >
  
    <div className="h-64 overflow-y-auto space-y-2 p-2 flex flex-col custom-scrollbar">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 max-w-[75%] text-sm rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-gray-700 text-white rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>

    {/* Input Field */}
    <div className="mt-3 flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 bg-[#363c46] text-white rounded outline-none"
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  </motion.div>
)}

    </div>
  );
}

export default ChatBot;
