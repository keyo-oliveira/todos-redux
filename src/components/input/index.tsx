import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/todosSlice";
import { v4 as uuidv4 } from "uuid";

export const Input: FunctionComponent<Partial<HTMLInputElement>> = () => {
  const dispatch = useDispatch();
  const [inputContent, setInputContent] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const content = event.target.value;

    setInputContent(content)    
  }

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();   
    const newId = uuidv4()

    dispatch(
      todoAdd({
        content: inputContent,
        id: newId,
      })
    );    
  };

  return (
    <div className="ma-auto mt-[-2rem] w-screen">
      <form className="gap-2 flex justify-center" onSubmit={handleAddTodo}>        
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="bg-rocket-gray-500 w-2/4 h-14 rounded-lg pl-4 text-rocket-gray-100"
            required
          />
          <button
            type="submit"
            className="h-14 bg-rocket-blue rounded-lg w-24 text-rocket-gray-100 flex items-center justify-center gap-2"
          >
            <span className="text-sm font-bold">Criar</span>
            <PlusCircle size={16} weight={"bold"} />
          </button>        
      </form>
    </div>
  );
};
