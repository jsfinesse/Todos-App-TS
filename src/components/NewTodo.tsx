import { useRef } from "react";

import React from "react";

const NewTodo: React.FC<{ onAdd: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAdd(enteredText);
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
