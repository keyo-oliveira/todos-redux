interface TodoCounterProps {
  createdTasks: number;
  completedTasks: number;
}

export const TodoCounter = ({
  completedTasks,
  createdTasks,
}: TodoCounterProps) => {
  return (
    <div className="w-full flex justify-between items-center max-w-3xl m-auto mt-16">
      <div className="flex items-center">
        <span className="text-rocket-blue mr-2">Tarefas criadas</span>
        <div className="w-6 h-5  bg-rocket-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xs text-rocket-gray-200 bg-rocket-gray-300 rounded-full">
            {createdTasks}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-rocket-purple mr-2">Concluídas </span>
        <div className="w-6 h-5  bg-rocket-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xs text-rocket-gray-200 ">
            {completedTasks}
          </span>
        </div>
      </div>
    </div>
  );
};
