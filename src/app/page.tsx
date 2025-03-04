"use client"; 

import { useAuth } from "../app/context/AuthContext";
import Login from "../app/login";

export default function Home() {
  const {user, logOut } = useAuth();

  if (!user) {
    return <Login/>
  }
  
  return (
    <div>
    </div>
  );
}
