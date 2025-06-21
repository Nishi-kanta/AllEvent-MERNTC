import React, { useState, useEffect, useRef } from "react";

const PaginatedAPI_Checkbox = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [allIds, setAllIds] = useState([]);
  const parentCheckboxRef = useRef(null);

  // Fetch current page data and total count
  useEffect(() => {
    const fetchPageData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
      );
      const result = await res.json();
      const totalCount = res.headers.get("X-Total-Count");
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
      setData(result);
    };

    fetchPageData();
  }, [page]);

  // Fetch all IDs only once (for global selection tracking)
  useEffect(() => {
    const fetchAllIds = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const result = await res.json();
      const ids = result.map((item) => item.id);
      setAllIds(ids);
    };

    fetchAllIds();
  }, []);

  // Determine parent checkbox state
  const isParentChecked =
    selectedIds.size === allIds.length && allIds.length > 0;
  const isParentIndeterminate =
    selectedIds.size > 0 && selectedIds.size < allIds.length;

  // Apply indeterminate state manually
  useEffect(() => {
    if (parentCheckboxRef.current) {
      parentCheckboxRef.current.indeterminate = isParentIndeterminate;
    }
  }, [isParentIndeterminate]);

  // Handle individual row checkbox
  const handleRowCheckbox = (id) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  // Handle parent checkbox toggle
  const handleParentCheckbox = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedIds(new Set(allIds));
    } else {
      setSelectedIds(new Set());
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        Paginated Table with Global Checkbox
      </h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-center">
              <input
                type="checkbox"
                ref={parentCheckboxRef}
                checked={isParentChecked}
                onChange={handleParentCheckbox}
              />
            </th>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={item.id}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.has(item.id)}
                  onChange={() => handleRowCheckbox(item.id)}
                />
              </td>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex gap-2 mt-6 justify-center items-center">
        <button
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`px-3 py-1 rounded border ${
                page === pageNum
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-white text-black"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Debug (Optional) */}
      <div className="mt-4 text-sm text-gray-600">
        Selected IDs: {JSON.stringify(Array.from(selectedIds))}
      </div>
    </div>
  );
};

export default PaginatedAPI_Checkbox;

//Lazy model

// import React, { useState, useEffect, useRef } from "react";

// const itemsPerPage = 10;

// const PaginatedAPI_Checkbox = () => {
//   const [data, setData] = useState([]);
//   const [selectedIds, setSelectedIds] = useState(new Set());
//   const [page, setPage] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);
//   const totalPages = Math.ceil(totalCount / itemsPerPage);

//   const parentCheckboxRef = useRef();

//   // Fetch current page data
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
//       );
//       const json = await res.json();

//       const totalItems = res.headers.get("x-total-count"); // API specific
//       setTotalCount(Number(totalItems));
//       setData(json);
//     };

//     fetchData();
//   }, [page]);

//   // Manage parent checkbox indeterminate state
//   useEffect(() => {
//     const pageIds = data.map((item) => item.id);
//     const selectedOnPage = pageIds.filter((id) => selectedIds.has(id));

//     const allChecked = selectedOnPage.length === pageIds.length;
//     const noneChecked = selectedOnPage.length === 0;

//     const checkbox = parentCheckboxRef.current;
//     if (checkbox) {
//       checkbox.checked = allChecked;
//       checkbox.indeterminate = !allChecked && !noneChecked;
//     }
//   }, [data, selectedIds]);

//   const handleParentCheckboxChange = (e) => {
//     const checked = e.target.checked;
//     const pageIds = data.map((item) => item.id);

//     const newSet = new Set(selectedIds);
//     if (checked) {
//       pageIds.forEach((id) => newSet.add(id));
//     } else {
//       pageIds.forEach((id) => newSet.delete(id));
//     }
//     setSelectedIds(newSet);
//   };

//   const handleRowCheckboxChange = (id) => {
//     const newSet = new Set(selectedIds);
//     if (newSet.has(id)) {
//       newSet.delete(id);
//     } else {
//       newSet.add(id);
//     }
//     setSelectedIds(newSet);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Paginated Table with Checkbox</h2>

//       <table className="w-full border-collapse border border-gray-300">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="border px-4 py-2 text-left">
//               <input
//                 type="checkbox"
//                 ref={parentCheckboxRef}
//                 onChange={handleParentCheckboxChange}
//               />
//             </th>
//             <th className="border px-4 py-2 text-left">ID</th>
//             <th className="border px-4 py-2 text-left">Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr
//               key={item.id}
//               className="even:bg-gray-50 odd:bg-white hover:bg-blue-50"
//             >
//               <td className="border px-4 py-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.has(item.id)}
//                   onChange={() => handleRowCheckboxChange(item.id)}
//                 />
//               </td>
//               <td className="border px-4 py-2">{item.id}</td>
//               <td className="border px-4 py-2">{item.title}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex items-center gap-2 mt-4">
//         <button
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//           disabled={page === 1}
//           className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Prev
//         </button>
//         {[...Array(totalPages)].map((_, idx) => {
//           const pageNum = idx + 1;
//           return (
//             <button
//               key={pageNum}
//               onClick={() => setPage(pageNum)}
//               className={`px-3 py-1 rounded ${
//                 page === pageNum
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {pageNum}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={page === totalPages}
//           className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {/* Debug selected IDs */}
//       <p className="mt-4 text-sm text-gray-600">
//         Selected IDs: {Array.from(selectedIds).join(", ") || "None"}
//       </p>
//     </div>
//   );
// };

// export default PaginatedAPI_Checkbox;