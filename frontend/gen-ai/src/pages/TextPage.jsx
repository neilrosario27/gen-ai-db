import React, { useState } from "react";
import TextInput from "../components/TextInput"; // Ensure this path matches your file structure
// import { createClient } from "@supabase/supabase-js";
import { useAuth } from "../context/AuthProvider";
import { supabase } from "../supabase/client";

const TextPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const { user } = useAuth();
  // const supabaseUrl = "https://legcqslsudvwqenlmkgm.supabase.co";
  // const supabaseKey =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZ2Nxc2xzdWR2d3Flbmxta2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjc3NDQsImV4cCI6MjAyMzc0Mzc0NH0.MzYADmSxRMUfSJeTqDYbk8Kq796vM2tWgj6owhNCdbw"; // Replace this with your Supabase key
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const userId = user.email;
  console.log(userId); // Replace "user1" with the actual user ID
  // add user email here

  const addToChatHistory = async (userText, serverResponse) => {
    // Update the state with the new chat
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { userText, serverResponse },
    ]);

    // Store the chat history in Supabase
    try {
      const { data, error } = await supabase.from("chat_history").insert({
        user_id: userId,
        question: userText,
        response: serverResponse,
      });

      if (error) {
        throw new Error(error.message);
      } else {
        console.log("Chat history stored successfully:", data);
      }
    } catch (error) {
      console.error("Error storing chat history:", error.message);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar (optional) */}
      <div className="bg-gray-800 text-white w-64 p-4 space-y-4">
        <div className="text-xl font-semibold">Chat History</div>
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-1">
        <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 flex-1">
          {chatHistory.map((chat, index) => (
            <div key={index} className="text-left space-y-2">
              <div className="inline-block bg-blue-300 rounded px-4 py-2 text-black">
                User: {chat.userText}
              </div>
              <div className="inline-block bg-gray-300 rounded px-4 py-2 text-black">
                Server: {chat.serverResponse}
              </div>
            </div>
          ))}
        </div>
        <TextInput updateTextValue={addToChatHistory} />
      </div>
    </div>
  );
};

export default TextPage;
