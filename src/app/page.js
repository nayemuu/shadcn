"use client";
import Navbar from "@/components/reuseable/Navbar/Navbar";
import JavaScriptSidebar from "@/components/topic/JavaScript/reusable/JavaScriptSidebar/JavaScriptSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <div className="w-full">
        <Navbar />
        <JavaScriptSidebar sidebarStatus={sidebarStatus} />
      </div>
    </SidebarProvider>
  );
}
