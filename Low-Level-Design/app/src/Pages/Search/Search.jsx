import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useFetch } from "../../Hooks/useFetch";
import { useDebounce } from "../../Hooks/useDebounce";

const URL = "https://www.google.com/complete/search?client=firefox";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  // const [query, setQuery] = useState("");

  const debouncedSearchText = useDebounce(searchText, 200);

  const reqUrl = `${URL}&q=${debouncedSearchText}`;
  const { data = [] } = useFetch(reqUrl);

  // useEffect(() => {
  //   // debounce logic on query
  //   const timeout = setTimeout(() => {
  //     setQuery(searchText);
  //   }, 200);

  //   return () => clearTimeout(timeout);
  // }, [searchText]);

  const showSearchResults = data && data[1]?.length > 1 && isInputFocused;

  return (
    <div className="m-4 pt-20">
      <h1 className="text-lg font-bold mb-2">Auto Complete and Search</h1>

      <div className="flex flex-col w-96">
        <input
          name="search"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          className={`border border-gray-300 p-2 outline-0 ${showSearchResults ? "border-b-0 rounded-b-0" : "rounded-md"}`}
        />

        {showSearchResults && (
          <div className="border border-gray-300 border-t-none p-2 rounded-b-md overflow-y-auto max-h-[50%]">
            <ul>
              {data[1].map((item, index) => (
                <li
                  className="p-1 flex items-center hover:bg-gray-100 cursor-pointer"
                  key={index}
                >
                  <SearchIcon size={14} className="mr-2" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
