import { Ellipsis } from "lucide-react";
import { users } from "../config";
import Card from "../components/common/Card";
import Table from "../components/common/Table";
import StarRating from "../components/common/StarRating";
import SearchBar from "../components/common/SearchBar";
import avatar from "../assets/avatar.png";
import { useEffect, useRef, useState } from "react";

function UserManagement() {
  const [userData, setUserData] = useState(users);
  const [filteredData, setFilteredData] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
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


  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(userData);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = userData.filter((user) => 
        user.name.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, userData]);

  const toggleUserStatus = (userIndex) => {
    setUserData(prevUsers => {
      const updatedUsers = [...prevUsers];
      const actualIndex = userData.findIndex(user => user.id === filteredData[userIndex].id);
      
      if (actualIndex !== -1) {
        updatedUsers[actualIndex] = {
          ...updatedUsers[actualIndex],
          status: updatedUsers[actualIndex].status === "active" ? "blocked" : "active"
        };
      }
      
      return updatedUsers;
    });
  };

  const deleteUser = (userIndex) => {
    const userToDelete = filteredData[userIndex];
    setUserData(prevUsers => prevUsers.filter(user => user.id !== userToDelete.id));
    setActivePopup(null);
  };

  const deleteSelectedUsers = (selectedIndexes) => {
    const idsToDelete = selectedIndexes.map(index => filteredData[index].id);
    setUserData(prevUsers => 
      prevUsers.filter(user => !idsToDelete.includes(user.id))
    );
  };

  const viewUserProfile = (userId) => {
    console.log("View profile for user:", userId);
    setActivePopup(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Table columns configuration
  const columns = [
    {
      header: "Name",
      accessor: "name",
      render: (row) => (
        <div className="flex items-center">
          <img src={avatar} alt={row.name} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <div className="font-medium">{row.name}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
            <div className="text-sm text-gray-500">{row.phone}</div>
          </div>
        </div>
      ),
    },
    {
      header: "User Deal",
      accessor: "deal",
      render: (row) => (
        <div>
          <div className="text-red-500">{row.sold} Sold</div>
          <div className="text-green-500">{row.bought} Bought</div>
        </div>
      ),
    },
    {
      header: "Block / Unblock",
      accessor: "status",
      render: (row, index) => (
        <button
          onClick={() => toggleUserStatus(index)}
          className={`px-4 py-1 rounded-md text-white ${
            row.status === "active" ? "bg-orange-400" : "bg-red-500"
          }`}
        >
          {row.status === "active" ? "Block" : "Unblock"}
        </button>
      ),
    },
    {
      header: "Ratings",
      accessor: "rating",
      render: (row) => <StarRating rating={row.rating} />,
    },
    {
      header: "Actions",
      accessor: "actions",
      render: (row, index) => (
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
                  onClick={() => viewUserProfile(row.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  View Profile
                </button>
                <button
                  onClick={() => deleteUser(index)}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  role="menuitem"
                >
                  Delete User
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-white">List of users</h1>

      <Card>
        <div className="p-4 flex justify-end">
          <SearchBar placeholder="Search user by their name" onSearch={handleSearch} />
        </div>

        <Table
          columns={columns}
          data={filteredData}
          selectable={true}
          itemsPerPage={5}
          onDelete={deleteSelectedUsers}
        />
      </Card>
    </div>
  );
}

export default UserManagement;