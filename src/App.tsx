import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const todos = [new Todo("Get groceries"), new Todo("Complete Assignments")];

    return (
        <div>
            <Todos items={todos} />
        </div>
    );
}

export default App;
