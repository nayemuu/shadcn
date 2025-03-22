import Navbar from "@/components/reuseable/Navbar/Navbar";
import JavaScriptSidebar from "@/components/topic/JavaScript/reusable/JavaScriptSidebar/JavaScriptSidebar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <JavaScriptSidebar />
    </div>
  );
}
