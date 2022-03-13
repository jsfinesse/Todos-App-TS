import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const deleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <div>
            <NewTodo onAdd={addHandler} />
            <Todos items={todos} onDelete={deleteHandler} />
        </div>
    );
}

export default App;
