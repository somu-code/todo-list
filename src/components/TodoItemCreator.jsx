import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../store/atom/todoListState";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
