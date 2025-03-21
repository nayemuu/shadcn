"use client";
import "./SearchBar.css";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

  const doSearch = (event) => {
    setSearchText(event.target.value);
  };

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (event) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(event);
      }, delay);
    };
  };

  const handleSearch = debounceHandler(doSearch, 0);

  const clearInputField = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input field text
    }
  };

  return (
    <div className="h-[36px] w-full relative z-10">
      <div className="absolute top-0 left-[15px] h-full flex items-center">
        <Icon icon="icon-park-outline:search" width="18" height="18" />
      </div>
      <form
        className="h-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search Here..."
          onChange={handleSearch}
          className="bg-[#F5F5F5] w-full h-full outline-none rounded-[20px] border border-solid border-transparent pl-[42px] text-[14px] searchbar"
          ref={inputRef}
        />
      </form>

      {searchText.length ? (
        <div className="absolute top-0 right-[15px] h-full flex items-center">
          <Icon
            icon="akar-icons:cross"
            className="text-[16px] hover:text-red-500 cursor-pointer"
            onClick={() => {
              setSearchText("");
              clearInputField();
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
