"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProfilePage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
      fetchUserDetails(id);
    }
  }, []);

  const fetchUserDetails = async (id: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("username, password")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
    } else if (data) {
      setUsername(data.username);
      setPassword(data.password);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!userId) return;
    setLoading(true);
    const { error } = await supabase
      .from("users")
      .update({ username, password })
      .eq("id", userId);

    if (error) {
      alert("Failed to save user details");
      console.error(error);
    } else {
      alert("User details updated successfully");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>

        {loading && <p>Loading...</p>}

        <label className="block mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          onClick={handleSave}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}
