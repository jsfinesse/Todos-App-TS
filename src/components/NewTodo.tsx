import { useRef } from "react";

import React from "react";

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="" id="text" ref={todoTextInputRef} />
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
