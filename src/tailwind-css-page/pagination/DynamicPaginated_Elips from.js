import React, { useState, useEffect } from "react";

const DynamicPaginated_Elips = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  //   const totalPages = 5; // Adjust this based on total items
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch total number of items first to calculate total pages
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setTotalPages(Math.ceil(json.length / itemsPerPage)));

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [page]); // Re-fetch when page changes
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (page > 3) pages.push("start-ellipsis");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (page < totalPages - 2) pages.push("end-ellipsis");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div>
      <h2>API Paginated Data</h2>
      {data.map((item) => (
        <p
          key={item.id}
          className={`${item.id % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
        >
          {item.title}
        </p>
      ))}

      {/* Pagination Controls */}
      {/* <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <span> Page {page} </span>

      <button onClick={() => setPage((prev) => prev + 1)}>Next</button> */}
      {/* Pagination Controls */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {/* Prev Button */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {/* Pagination Numbers */}
        {getPageNumbers().map((item, i) =>
          item === "start-ellipsis" || item === "end-ellipsis" ? (
            <span key={i}>...</span>
          ) : (
            <button
              key={item + "-" + i}
              onClick={() => setPage(item)}
              style={{
                padding: "4px 8px",
                fontWeight: page === item ? "bold" : "normal",
                backgroundColor: page === item ? "#007bff" : "#fff",
                color: page === item ? "#fff" : "#000",
                border: "1px solid #ccc",
              }}
            >
              {item}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DynamicPaginated_Elips;