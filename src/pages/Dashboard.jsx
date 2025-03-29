import { Ellipsis } from "lucide-react";
import StarRating from "../components/common/StarRating";
import MetricCard from "../components/common/MetricCard";
import Card from "../components/common/Card";
import Table from "../components/common/Table";
import avatar from "../assets/avatar.png";
import { metrics, users } from "../config";
import { useState, useRef, useEffect } from "react";
import Chart from "../components/GrowthChart";

function Dashboard() {
  const [chartPeriod, setChartPeriod] = useState('month');
  const [userData, setUserData] = useState(users);
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

  const toggleUserStatus = (userIndex) => {
    setUserData(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        status: updatedUsers[userIndex].status === "active" ? "blocked" : "active"
      };
      return updatedUsers;
    });
  };

  const deleteUser = (userIndex) => {
    setUserData(prevUsers => prevUsers.filter((_, index) => index !== userIndex));
    setActivePopup(null);
  };

  const deleteSelectedUsers = (selectedIndexes) => {
    setUserData(prevUsers => 
      prevUsers.filter((_, index) => !selectedIndexes.includes(index))
    );
  };

  const viewUserProfile = (userId) => {
    console.log("View profile for user:", userId);
    setActivePopup(null);
  };

  // Table columns configuration
  const columns = [
    {
      header: "Name",
      accessor: "name",
      render: (row) => (
        <div className="flex items-center">
          <img
            src={avatar}
            alt={row.name}
            className="w-8 h-8 rounded-full mr-2"
          />
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
      <h1 className="text-xl font-medium text-white">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                color={metric.color}
                linkText={metric.linkText}
                linkUrl={metric.linkUrl}
              />
            ))}
          </div>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Total Earning</h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">12,423,48.00</div>
            </div>
          </Card>
        </div>

        <Card className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Company Growth</h2>
          </div>

          <div className="flex-1">
           <Chart
              period={chartPeriod} 
              onPeriodChange={setChartPeriod} 
            />
          </div>
        </Card>
      </div>

      {/* User Management Table */}
      <Card>
        <div className="flex justify-between items-center mb-4 p-4">
          <h2 className="text-lg font-medium">User Management</h2>
          <div className="text-sm text-gray-500">Select All</div>
        </div>
        <Table
          columns={columns}
          data={userData}
          selectable={true}
          itemsPerPage={5}
          onDelete={deleteSelectedUsers}
        />
      </Card>
    </div>
  );
}

export default Dashboard;