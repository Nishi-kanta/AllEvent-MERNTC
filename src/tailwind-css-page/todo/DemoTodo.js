import React, { useState } from "react";

const DemoTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handelTodo = () => {
    if (!newtodo.trim()) return;
    const newtodos = {
      id: todos.length + 1,
      todo: newtodo,
      completed: false,
    };
    if (newtodo) {
      const checkTodo = todos.some((val) => val.todo === newtodos.todo);
      if (checkTodo) {
        alert("Todo already exist");
        setNewTodo("");
        return;
      }
    }
    setTodos((prev) => [...prev, newtodos]);
    setNewTodo("");
  };

  const handelUpdate = (id) => {
    const copydata = [...todos];
    const updateData = copydata.map((val) =>
      val.id === id ? { ...val, completed: !val.completed } : val
    );
    setTodos(updateData);
  };

  const handelDelete = (id) => {
    setTodoToDelete(id);
    setShowConfirm(true);
  };
  const handleCancelDelete = () => {
    setShowConfirm(false);
    setTodoToDelete(null);
  };
  const handleDeleteConfirmed = () => {
    const copyData = [...todos];
    const updateData = copyData.filter((item) => item.id !== todoToDelete);
    setTodos(updateData);
    setShowConfirm(false);
    setTodoToDelete(null);
  };

  const filteredTodos = todos
    .filter((item) => item.todo.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      filter === "" ? true : item.completed.toString() === filter
    );

  const handelClearFilter = () => {
    setSearch("");
    setFilter("");
  };

  console.log("todos", todos);

  return (
    <div>
      <div className="flex justify-center ">
        <input
          type="text"
          value={newtodo}
          placeholder="Add your todo"
          className={`border-[1px] rounded-sm m-4 p-2`}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button
          className="p-2 border-[2px] m-4 bg-green-400 text-white"
          onClick={handelTodo}
        >
          Add
        </button>
        <input
          type="text"
          value={search}
          placeholder="Search your todo"
          className={`border-[1px] rounded-sm m-4 p-2`}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`border-[1px] rounded-sm m-4 p-2`}
        >
          <option value="">--Select Status--</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        {filter && (
          <button
            className="p-2 m-4 border-[1px] bg-orange-400 text-white"
            onClick={handelClearFilter}
          >
            Clear All
          </button>
        )}
      </div>
      <ul className="m-2 p-2 border-2 h-[400px] overflow-y-auto">
        {filteredTodos.length > 0 ? (
          <>
            {filteredTodos?.map((item) => (
              <div
                className={`flex justify-around hover:bg-slate-200 ${
                  item.id % 2 === 0 ? "bg-slate-100" : "bg-white"
                }`}
              >
                <li
                  className={`cursor-pointer ${
                    // item.id % 2 === 0 ? "bg-slate-100" : "bg-white"
                    ""
                  }  p-2 `}
                >
                  {`${item.id} ${item.todo} Status:-${item.completed}`}
                </li>
                <div>
                  <>
                    <button
                      className="p-2 m-2 bg-blue-500 text-white"
                      onClick={() => handelUpdate(item.id)}
                    >
                      Update
                    </button>

                    <button
                      className="p-2 m-2 bg-red-500 text-white"
                      onClick={() => {
                        handelDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="h-[300px] flex justify-center items-center">
            <h1>No data found</h1>
          </div>
        )}
      </ul>
      {/* Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="mb-4 text-lg font-semibold">
              Are you sure you want to delete this todo?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDeleteConfirmed}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoTodo;