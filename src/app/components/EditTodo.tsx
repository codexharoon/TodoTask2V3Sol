"use client";
import { Todo } from "@/app/page";
import React, { useState } from "react";

interface EditTodoProps {
  todo: Todo;
  editTodo: (id: number, updatedTodo: Todo) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo, editTodo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);

  const handleEdit = () => {
    const updatedTodo: Todo = { ...todo, title, description, completed };
    editTodo(todo.id, updatedTodo);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="
            text-black py-2 px-4
        "
      />
      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="
            text-black py-2 px-4
        "
      />

      <label htmlFor="comp">Completed</label>
      <input
        type="checkbox"
        className="h-4 w-4"
        checked={completed}
        id="comp"
        onChange={(e) => setCompleted(e.target.checked)}
      />

      <button onClick={handleEdit} className="border border-white py-2 px-4">
        Edit Todo
      </button>
    </div>
  );
};

export default EditTodo;
