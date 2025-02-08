import React, { useState, useEffect } from "react";

const PaginatedAPI = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
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
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                fontWeight: page === pageNum ? "bold" : "normal",
                backgroundColor: page === pageNum ? "blue" : "white",
                color: page === pageNum ? "white" : "black",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
            >
              {pageNum}
            </button>
          );
        })}

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

export default PaginatedAPI;