"use client";
import Navbar from "@/components/reuseable/Navbar/Navbar";
import JavaScriptSidebar from "@/components/topic/JavaScript/reusable/JavaScriptSidebar/JavaScriptSidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <div className="w-full">
      <Navbar
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
      />
      <JavaScriptSidebar sidebarStatus={sidebarStatus} />
    </div>
  );
}
