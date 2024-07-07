"use client";
import React, { useState } from "react";
import AddTodo from "@/app/components/AddTodo";
import EditTodo from "@/app/components/EditTodo";
import DeleteTodo from "@/app/components/DeleteTodo";

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id: number, updatedTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div>
        <div className="flex justify-center items-start flex-col gap-2">
          <h1>Todo List</h1>
          <AddTodo addTodo={addTodo} />
        </div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="max-w-6xl w-full mx-auto border border-white p-4 m-2"
          >
            {todo.completed ? (
              <p className="text-lg line-through">Title: {todo.title}</p>
            ) : (
              <p className="text-lg font-bold">Title: {todo.title}</p>
            )}
            <p className="text-sm">Desc: {todo.description}</p>
            <EditTodo todo={todo} editTodo={editTodo} />
            <DeleteTodo id={todo.id} deleteTodo={deleteTodo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
