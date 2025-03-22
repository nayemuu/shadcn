"use client";
import Navbar from "@/components/reuseable/Navbar/Navbar";
import JavaScriptSidebar from "@/components/topic/JavaScript/reusable/JavaScriptSidebar/JavaScriptSidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <div>
      <div
        className={`duration-200 ease-linear ${
          !isMobile && open ? "ml-[20rem]" : ""
        }`}
      >
        <Navbar />
      </div>
      <JavaScriptSidebar />
    </div>
  );
}
