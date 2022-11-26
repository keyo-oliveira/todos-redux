import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useDispatch } from "react-redux";
import { todoRemove, todoToggled } from "../../store/todosSlice";
import classnames from "classnames";

interface Task {
  content: string;
  isDone: boolean;
  id: string;
}
export const Task = ({ content, isDone, id }: Task) => {
  const dispatch = useDispatch();

  const handleTodoChange = () => {
    dispatch(
      todoToggled({
        id: id,
      })
    );
  };

  const handleRemoveTodo = () => {
    dispatch(
      todoRemove({
        id: id,
      })
    );
  };

  return (
    <div className="max-w-3xl w-full bg-rocket-gray-500 border-rocket-gray-400 rounded-lg flex gap-2 pl-6 pr-6 h-[72px] items-center m-auto relative">
      <button
        className={classnames(
          "cursor-pointer w-6 h-5 rounded-full appearance-none border-rocket-blue border-2 text-rocket-gray-100 flex items-center justify-center",
          isDone && "bg-rocket-purple-dark border-rocket-purple-dark" 
        )}
        onClick={handleTodoChange}
      >
        {isDone && <CheckCircle size={18} />}
      </button>
      <p className="text-rocket-gray-100">{content}</p>
      <button
        className="text-rocket-gray-200 absolute pr-4 right-0"
        type="button"
        onClick={() => handleRemoveTodo()}
      >
        <Trash size={24} />
      </button>
    </div>
  );
};
