import React, { useState, useEffect } from "react";

const PaginatedList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20; // Show 5 items per page
  //   const totalPages = 5; // Adjust this based on total items
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    // Fetch total number of items first to calculate total pages
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setTotalPages(Math.ceil(json.length / itemsPerPage)));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // Calculate current page data
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Paginated Data</h2>
      {currentData.map((item) => (
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

      <span>
        {" "}
        Page {page} of {Math.ceil(data.length / itemsPerPage)}{" "}
      </span>

      <button
        onClick={() =>
          setPage((prev) =>
            Math.min(prev + 1, Math.ceil(data.length / itemsPerPage))
          )
        }
        disabled={endIndex >= data.length}
      >
        Next
      </button> */}

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

export default PaginatedList;