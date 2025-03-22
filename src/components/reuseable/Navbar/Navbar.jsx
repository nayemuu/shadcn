import { SidebarTrigger } from "@/components/ui/sidebar";
import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center navbar min-h-[65px] px-5 gap-5">
      <div className="flex gap-3">
        <SidebarTrigger />
        <div className="font-bold">JavaScript</div>
        <div>Home</div>
      </div>

      <div className="w-full max-w-[400px] flex-grow flex items-center gap-5">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
