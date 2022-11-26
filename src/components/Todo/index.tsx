import { Input } from "../input";
import { Empty } from "./Empty";
import { Task } from "./Task";
import { TodoCounter } from "./TodoCounter";
import { useSelector } from "react-redux";

export const Todo = () => {
  const todosState = useSelector((state: reduxState) => state.todos);
  const createdTasks = todosState.length;
  const completedTasks = todosState.filter(
    (task) => task.isDone === true
  ).length;

  return (
    <div className="w-screen ma-auto">
      <>
        <Input />
        <TodoCounter
          completedTasks={completedTasks}
          createdTasks={createdTasks}
        />
        {!todosState.length ? (
          <Empty />
        ) : (
          todosState.map((task) => {           
            return (
              <Task key={task.id} content={task.content} isDone={task.isDone} id={task.id} />
            )
          })
        )}
      </>
    </div>
  );
};
