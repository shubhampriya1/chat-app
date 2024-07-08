import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchUser = async () => {
    if (searchInput.length < 3) return;
    try {
      const token = Cookies.get("authtoken");
      if (!token) {
        throw new Error("error");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const Users = await axios.get(
        "http://localhost:5000/api/user/?search=" + searchInput,
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
        <div>
          {searchResult.map((user) => (
            <Link to={`/user/${user.id}`} key={user.id} className="block">
              <div className="flex border p-2 mb-2 mt-7 rounded-md">
                <img
                  className="h-9 rounded-full"
                  src={user.pic}
                  onError={(e) => {
                    e.target.src = "https://github.com/shadcn.png";
                  }}
                />
                <div className="ml-4">
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-full w-full  flex-1 flex items-center justify-center">
          No Result
        </div>
      )}
    </div>
  );
};

export default Search;
