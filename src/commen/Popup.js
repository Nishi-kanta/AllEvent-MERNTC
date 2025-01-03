import React from "react";

const Popup = ({ userdetails, setUserdetails }) => {
  return (
    <div>
      {userdetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="p-5 border-2 bg-white rounded-lg shadow-lg w-1/2 max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p>
              <strong>Name:</strong> {userdetails.name}
            </p>
            <p>
              <strong>Position:</strong> {userdetails.position}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setUserdetails(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
