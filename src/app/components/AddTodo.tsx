"use client";
import React, { useState } from "react";
import { Todo } from "@/app/page";

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    const newTodo: Todo = {
      id: Math.floor(100000 + Math.random() * 900000),
      title: title,
      description: description,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="
            text-black py-2 px-4
        "
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="
            text-black py-2 px-4
        "
      />
      <button onClick={handleAdd} className="border border-white py-2 px-4">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
