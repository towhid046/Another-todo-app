import { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  
  const [isEdit, setEditedTodo] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const todoInputHandelar = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    input !== ""
      ? setTodo([...todos, input]) + setInput("")
      : alert("Please add a task!");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo, index) => index !== id);
    setTodo(filteredTodos);
  };

  const editTodo = (id) => {
    const findTodo = todos.find((todo, index) => index === id);
    setInput(findTodo);

    setEditedTodo(true);
    setUpdateId(id);
  };

  const updateTodo = () => {
    todos[updateId] = input;
    setEditedTodo(false);
    setInput("");
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center bg-gray-300 min-h-screen">
          <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
            <div className="input_text relative">
              <input
                onChange={todoInputHandelar}
                className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
                value={input}
                type="text"
                placeholder="Write a new task"
              />
              <button
                onClick={isEdit ? updateTodo : addTodo}
                className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
              >
                {isEdit ? "Update" : "Add"}
              </button>

              <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
            </div>
            <ul className="all_tasks">
              {todos.map((todo, index) => (
                <li key={index}>
                  <hr className="mt-2" />
                  <div className="my-4 flex justify-between px-1">
                    <div className="flex items-center gap-2">
                       <span className=" h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                        <i 
                          id="checked1"
                           className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
                        ></i>
                      </span>

                      <p className="md:max-w-[375px] truncate max-w-[280px] ">
                        <strike
                          id="strike1"
                          className="text-gray-600 text-sm no-underline "
                        >
                          {todo}
                        </strike>
                      </p>
                    </div>
                    <span
                      onClick={() => editTodo(index)}
                      className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                    >
                      <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                    </span>
                    <span
                      onClick={() => deleteTodo(index)}
                      className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                    >
                      <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
