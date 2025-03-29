// sample data
export const metrics = [
  {
    title: "Active Users",
    value: "5556",
    color: "teal",
    linkText: "View All Users",
    linkUrl: "/user-management",
  },
  {
    title: "Total Buyers",
    value: "3480",
    color: "green",
    linkText: "View All Buyers",
    linkUrl: "/user-management",
  },
  {
    title: "Total Ads",
    value: "459",
    color: "yellow",
    linkText: "View All Ads",
    linkUrl: "/user-management",
  },
  {
    title: "Total Sellers",
    value: "2924",
    color: "red",
    linkText: "View All Sellers",
    linkUrl: "/user-management",
  },
];

// Sample data
export const users = [
  {
    id: 1,
    name: "Yeray Rosalos",
    email: "yerayrosalos@gmail.com",
    phone: "+91-098765432",
    sold: 2,
    bought: 1,
    status: "active",
    rating: 3,
  },
  {
    id: 2,
    name: "Talah Cotton",
    email: "talahcotton2@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    status: "blocked",
    rating: 4,
  },
  {
    id: 3,
    name: "Yeray Rosalos",
    email: "yerayrosalos@gmail.com",
    phone: "+91-098765432",
    sold: 2,
    bought: 1,
    status: "active",
    rating: 3,
  },
  {
    id: 4,
    name: "Talah Cotton",
    email: "talahcotton2@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    status: "blocked",
    rating: 4,
  },
  {
    id: 5,
    name: "Talah Cotton",
    email: "talahcotton2@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    status: "blocked",
    rating: 4,
  },
  {
    id: 6,
    name: "Talah Cotton",
    email: "talahcotton2@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    status: "active",
    rating: 4,
  },
];

// Sample data for reviews
export const reviews = [
  {
    id: 1,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    comment: "Very Good",
    rating: 3,
    date: "July 3, 2023 12:29 pm",
    status: "pending",
  },
  {
    id: 2,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    comment: "Looks Awesome",
    rating: 5,
    date: "July 3, 2023 12:27 pm",
    status: "approved",
  },
  {
    id: 3,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    comment: "Very Good",
    rating: 3,
    date: "July 3, 2023 12:29 pm",
    status: "pending",
  },
  {
    id: 4,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    comment: "Looks Awesome",
    rating: 5,
    date: "July 3, 2023 12:27 pm",
    status: "declined",
  },
  {
    id: 5,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    comment: "Very Good",
    rating: 3,
    date: "July 3, 2023 12:29 pm",
    status: "pending",
  },
];

// Sample data for activity history
export const activities = [
  {
    id: 1,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    action: "Log in",
    date: "July 3, 2023 12:29 pm",
  },
  {
    id: 2,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    action: "Booked Product",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: 3,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    action: "Selling Product",
    date: "July 3, 2023 12:29 pm",
  },
  {
    id: 4,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    action: "Commented",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: 5,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    action: "Bought Product",
    date: "July 3, 2023 12:29 pm",
  },
  {
    id: 6,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    action: "Log out",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: 7,
    user: { name: "Yeray Rosalos", avatar: "/images/avatar1.png" },
    action: "Delete Product",
    date: "July 3, 2023 12:29 pm",
  },
  {
    id: 8,
    user: { name: "Alan Robert", avatar: "/images/avatar2.png" },
    action: "Share Product",
    date: "July 3, 2023 12:27 pm",
  },
];
