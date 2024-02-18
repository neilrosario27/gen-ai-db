import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
import { useAuth } from "../context/AuthProvider";
import { supabase } from "../supabase/client";
// const supabaseUrl = "https://legcqslsudvwqenlmkgm.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZ2Nxc2xzdWR2d3Flbmxta2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjc3NDQsImV4cCI6MjAyMzc0Mzc0NH0.MzYADmSxRMUfSJeTqDYbk8Kq796vM2tWgj6owhNCdbw"; // Make sure to use your actual Supabase Key
// const supabase = createClient(supabaseUrl, supabaseKey);

function ChatHistory() {
  const [chatHistory, setChatHistory] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Check if user exists and user.mail is not undefined
    if (user && user.email) {
      fetchChatHistory(user.email); // Pass user.email to fetchChatHistory
    }
  }, [user]); // Include user in the dependency array to re-run effect when user changes

  async function fetchChatHistory(userId) {
    const { data, error } = await supabase
      .from("chat_history")
      .select("*")
      .eq("user_id", userId); // Assuming user_id should match user.email, adjust if needed

    if (error) {
      console.error(
        "Error fetching chat history for user:",
        userId,
        error.message
      );
    } else {
      setChatHistory(data || []);
    }
  }

  return (
    <div>
      <h1>Chat History</h1>
      <ul>
        {chatHistory.map((chat) => (
          <li key={chat.id}>
            <strong>Question:</strong> {chat.question}
            <br />
            <strong>Response:</strong> {chat.response}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatHistory;
