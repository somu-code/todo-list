import { selector } from "recoil";
import { todoListState } from "../atom/todoListState";
import { todoListFilterState } from "../atom/todoListFilterState";

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isCompleted);
      case "Show Uncompleted":
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});
