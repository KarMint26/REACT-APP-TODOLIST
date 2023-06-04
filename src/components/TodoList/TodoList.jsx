import React from "react";
import ItemTodo from "./ItemTodo";
import Swal from "sweetalert2";

export default function TodoList() {
  const [data, setData] = React.useState([
    {
      id: 1,
      todo: "Learn ReactJS",
    },
    {
      id: 2,
      todo: "Read Newspaper",
    },
    {
      id: 3,
      todo: "Write Blog",
    },
  ]);
  const [todo, setTodo] = React.useState("");
  const [index, setIndex] = React.useState(4);

  const showAlertFailed = () => {
    Swal.fire({
      title: "Invalid Input",
      text: "Expected More Than 2 Characters and Less Than 15 Characters",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#EF4444",
    });
  };

  const showAlertSuccess = (q) => {
    Swal.fire({
      title: "Great👌",
      text: q,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#6366F1",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length > 2) {
      if (todo.length < 15) {
        setData([
          ...data,
          {
            id: index,
            todo: todo,
          },
        ]);
        setIndex((prev) => (prev += 1));
        setTodo("");
        showAlertSuccess("Add Todo Success");
      } else {
        setTodo("");
        showAlertFailed();
      }
    } else {
      setTodo("");
      showAlertFailed();
    }
  };

  const handleDelete = (idx) => {
    setData(data.filter((result) => result.id !== idx));
    showAlertSuccess("Delete Todo Success");
  };

  const handleUpdate = (idx, dataUpdate) => {
    if (dataUpdate.length > 2) {
      if (dataUpdate.length < 15) {
        const objIndex = data.findIndex((res) => res.id === idx);
        data[objIndex].todo = dataUpdate;
        showAlertSuccess("Update Data Success");
      } else {
        showAlertFailed();
      }
    } else {
      showAlertFailed();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center p-1 lg:p-2 px-0 gap-2 sm:gap-3 lg:gap-4"
      >
        <input
          type="text"
          className="rounded-xl lg:rounded-2xl lg:text-base text-sm text-slate-600 bg-white outline-none border-none pt-[0.4rem] pb-[0.4rem] lg:pt-2 lg:pb-2 px-4 w-[690px]"
          placeholder="add todo..."
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button type="submit" className="btn btn-add">
          Add
        </button>
      </form>
      <ul className="flex flex-col justify-center gap-3 mt-4">
        {data.map((res) => {
          return (
            <ItemTodo
              handleDeleteButton={handleDelete}
              handleUpdateButton={handleUpdate}
              dataFromTodo={res}
              key={res.id}
            />
          );
        })}
      </ul>
    </>
  );
}
