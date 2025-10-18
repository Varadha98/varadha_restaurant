"use client";

import { useState } from "react";
import logo from "@/assets/logo.png"
import loginbg from "@/assets/loginbg.jpg"
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  // const handleLogin = async () => {
  //   // Insert into Supabase
  //   const { data, error } = await supabase
  //     .from("users")
  //     .insert([{ username, password }]);

  //   if (error) {
  //     console.error(error);
  //     alert("Failed to save user");
  //   } else {
  //     console.log("User saved:", data);
  //     router.push("/restaurants"); // redirect after save
  //   }
  // };
  const handleLogin = async () => {
  if (!username || !password) {
    alert("Enter username and password");
    return;
  }

  // 1️⃣ Check if user exists
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error) {
    // If not found, create new user
    const { data, error: insertError } = await supabase
      .from("users")
      .insert([{ username, password }])
      .select()
      .single();

    if (insertError || !data) {
      console.error(insertError);
      alert("Failed to create user");
      return;
    }

    user = data; // newly created user
  }

  // 2️⃣ Store userId in localStorage
  localStorage.setItem("userId", user.id);

  // 3️⃣ Redirect to restaurants page
  router.push("/restaurants");
};

  return (

<div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${loginbg.src})` }}>
  <div className=" m-0 shadow sm:rounded-lg flex flex-col lg:flex-row"> 
    <div className=" bg-black/10 backdrop-blur-lg shadow-lg rounded-xl flex-1 flex flex-col justify-center items-center p-10">
      <img src={logo.src} alt="Logo" className="w-32 md:w-32 lg:w-40 mb-6" />
      
      <div className="w-full max-w-sm">

        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-blue-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-blue-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          onClick={handleLogin}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center"
       >
          
          <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Login</span>
        </button>

        <p className="mt-6 text-xs text-gray-600 text-center">
          I agree to abide by Varadha Terms of Service
        </p>
      </div>
    </div>
  </div>
</div> 
  );
}
