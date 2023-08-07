import React from "react";
import { todoListState } from "../store/atom/todoListState";
import TodoListState from "./TodoListState";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoListState />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
