import { useState } from "react";
import StarRating from "../components/common/StarRating";
import { CheckIcon, XIcon } from "lucide-react";
import Card from "../components/common/Card";
import Table from "../components/common/Table";
import { reviews } from "../config";
import avatar from "../assets/avatar.png";
import SearchBar from "../components/common/SearchBar";

function RatingAndReview() {
  const [activeTab, setActiveTab] = useState("all");
  const [reviewsData, setReviewsData] = useState(reviews);

  // Filter reviews based on active tab
  const filteredReviews =
    activeTab === "all"
      ? reviewsData
      : reviewsData.filter((review) => review.status === activeTab);

  // Function to approve a review
  const approveReview = (reviewIndex) => {
    const updatedReviews = [...reviewsData];
    updatedReviews[reviewIndex] = {
      ...updatedReviews[reviewIndex],
      status: "approved",
    };
    setReviewsData(updatedReviews);
  };

  // Function to decline a review
  const declineReview = (reviewIndex) => {
    const updatedReviews = [...reviewsData];
    updatedReviews[reviewIndex] = {
      ...updatedReviews[reviewIndex],
      status: "declined",
    };
    setReviewsData(updatedReviews);
  };

  // Function to delete selected reviews
  const deleteSelectedReviews = (selectedIndexes) => {
    // Get the IDs of reviews to delete
    const idsToDelete = selectedIndexes.map((index) => reviewsData[index].id);

    // Remove the selected reviews
    setReviewsData((prevData) =>
      prevData.filter((review) => !idsToDelete.includes(review.id))
    );
  };

  // Find the index in the original data array based on the filtered index
  const findOriginalIndex = (filteredIndex) => {
    const reviewId = filteredReviews[filteredIndex].id;
    return reviewsData.findIndex((review) => review.id === reviewId);
  };

  // Table columns configuration
  const columns = [
    {
      header: "Name",
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
      header: "Comment",
      accessor: "comment",
    },
    {
      header: "Ratings",
      accessor: "rating",
      render: (row) => <StarRating rating={row.rating} />,
    },
    {
      header: "Date & Time",
      accessor: "date",
    },
    {
      header: "Actions",
      accessor: "actions",
      render: (row, index) => {
        const originalIndex = findOriginalIndex(index);

        return (
          <div className="flex space-x-2">
            {row.status === "pending" ? (
              <>
                <button
                  className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={() => approveReview(originalIndex)}
                  title="Approve"
                >
                  <CheckIcon size={16} />
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => declineReview(originalIndex)}
                  title="Decline"
                >
                  <XIcon size={16} />
                </button>
              </>
            ) : row.status === "approved" ? (
              <span className="px-3 py-1 bg-green-500 text-white rounded-md">
                Approved
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-500 text-white rounded-md">
                Declined
              </span>
            )}
          </div>
        );
      },
    },
  ];

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  // Calculate dynamic showing text
  const showingText = `Showing ${Math.min(5, filteredReviews.length)} of ${
    reviewsData.length
  } total Ratings`;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-white">
        List of reviews with ratings, comments, and user details
      </h1>

      <Card>
        <div className="p-4 border-b">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-3 py-1 rounded-md ${
                activeTab === "all" ? "bg-teal-500 text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 rounded-md ${
                activeTab === "approved"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("approved")}
            >
              Approved
            </button>
            <button
              className={`px-3 py-1 rounded-md ${
                activeTab === "pending"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
            <button
              className={`px-3 py-1 rounded-md ${
                activeTab === "declined"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("declined")}
            >
              Declined
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-gray-500">
              {filteredReviews.length > 0 && <span>Select</span>}
            </div>

            <div className="p-4 flex justify-end">
              <SearchBar
                placeholder="Search user by their name"
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          data={filteredReviews}
          selectable={true}
          showingText={showingText}
          onDelete={deleteSelectedReviews}
          itemsPerPage={5}
          pagination={true}
        />
      </Card>
    </div>
  );
}

export default RatingAndReview;
