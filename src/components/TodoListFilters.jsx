import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store/atom/todoListFilterState";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoListFilters;
