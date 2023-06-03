import React from "react";
import Todo from "./components/Todo";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Todo />
      </div>
    </>
  );
}
