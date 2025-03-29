import Card from "../components/common/Card";
import Table from "../components/common/Table";
import SearchBar from "../components/common/SearchBar";
import { Ellipsis, SlidersHorizontal } from "lucide-react";
import { activities } from "../config";
import avatar from "../assets/avatar.png";
import { useEffect, useRef, useState } from "react";

function History() {
  const [data, setData] = useState(activities);
  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const deleteReviews = (selectedIndexes) => {
    setData((prevUsers) =>
      prevUsers.filter((_, index) => !selectedIndexes.includes(index))
    );
  };


  // Table columns configuration
  const columns = [
    {
      header: "User",
      accessor: "user",
      render: (row) => (
        <div className="flex items-center">
          <img
            src={avatar}
            alt={row.user.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="font-medium">{row.user.name}</div>
        </div>
      ),
    },
    {
      header: "Action",
      accessor: "action",
    },
    {
      header: "Date & Time",
      accessor: "date",
    },
    {
      header: "React",
      accessor: "react",
      render: (index) => (
        <div className="relative">
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setActivePopup(activePopup === index ? null : index)}
          >
            <Ellipsis />
          </button>
          
          {activePopup === index && (
            <div 
              ref={popupRef}
              className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1" role="menu" aria-orientation="vertical">
                <button
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  View Detail
                </button>
                <button
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  role="menuitem"
                >
                  Send Notification
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium text-white">Activity History</h1>
        <p className="text-white text-opacity-80">
          View historical data of actions taken within the app.
        </p>
      </div>

      <Card>
        <div className="p-4 flex justify-end gap-3 items-center">
          <SearchBar
            placeholder="Search by user, date, or activity type"
            onSearch={handleSearch}
          />
          <div>
            <SlidersHorizontal className="text-teal-500" />
          </div>
        </div>

        <Table
          columns={columns}
          data={data}
          selectable={true}
          itemsPerPage={5}
          onDelete={deleteReviews}
        />
      </Card>

      <div className="flex justify-end">
        <button className="text-teal-500 hover:underline">
          Export activity log to CSV
        </button>
      </div>
    </div>
  );
}

export default History;
