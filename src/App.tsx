import { Header } from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App bg-rocket-gray-600 h-screen">
      <Provider store={store}>
        <Header />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
