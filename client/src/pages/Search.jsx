import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  const fetchUser = async () => {
    try {
      const token = Cookies.get("authtoken");
      if (!token) {
        throw new Error("error");
      }
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const Users = await axios.post(
        "http://localhost:5000/api/user/?search=" + searchInput,
        null,
        config
      );

      setSearchResult(Users.data);
      console.log(Users.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [searchInput]);
  return (
    <div className="p-10">
      <Input
        placeholder="search for users"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchResult.length != 0 ? (
        <div></div>
      ) : (
        <div className="h-full w-full  flex-1 flex items-center justify-center">
          No Result
        </div>
      )}
    </div>
  );
};

export default Search;
