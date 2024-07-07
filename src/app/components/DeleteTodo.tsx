"use client";
import React from "react";

interface DeleteTodoProps {
  id: number;
  deleteTodo: (id: number) => void;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ id, deleteTodo }) => {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="border border-white py-2 px-4 mt-2 w-full"
    >
      Delete Todo
    </button>
  );
};

export default DeleteTodo;
