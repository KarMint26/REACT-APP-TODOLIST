import React from "react";
import TodoList from "./TodoList/TodoList";
import Loading from "./Loading";

export default function Todo() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="wrapper">
        <div className="card w-[315px] sm:w-[500px] lg:w-[800px] h-fit relative overflow-hidden bg-slate-200 shadow-lg rounded-lg p-5">
          <div className="card-heading bg-indigo-500 text-white flex justify-center items-center py-8 sm:py-10 w-full absolute left-0 top-0">
            <h1 className="text-3xl">Todo List</h1>
          </div>
          <div className="card-content mt-24 sm:mt-28">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}
