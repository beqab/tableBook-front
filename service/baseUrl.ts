export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://table-book-back.onrender.com/api"
    : "http://localhost:5000/api";
