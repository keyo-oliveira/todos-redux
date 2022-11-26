import { ClipboardText } from "phosphor-react";

export const Empty = () => {
  return (
    <div className="ma-auto flex items-center justify-center w-full max-w-3xl m-auto mt-6">
      <p className="flex flex-col text-rocket-gray-300 border-rocket-gray-400 border-t pt-16 w-full items-center">
        <ClipboardText size={56} />
        <span className="font-bold text-rocket-gray-300 text-base">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-rocket-gray-300 text-base">
          Crie tarefas e organize seus itens a fazer
        </span>
      </p>
    </div>
  );
};
