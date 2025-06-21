import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = {
  todo: [
    { id: "1", content: "Task A" },
    { id: "2", content: "Task B" },
  ],
  inProgress: [{ id: "3", content: "Task C" }],
  done: [{ id: "4", content: "Task D" }],
};

const Kanban_Drag_Drop_Card = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const [moved] = sourceCol.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCol.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
      });
    } else {
      destCol.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      });
    }
  };

  const columnNames = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(columns).map(([colId, tasks]) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white p-4 rounded shadow min-h-[300px]"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    {columnNames[colId]}
                  </h2>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className={`p-3 mb-2 bg-blue-100 rounded shadow ${
                            snapshot.isDragging ? "bg-blue-200" : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban_Drag_Drop_Card;