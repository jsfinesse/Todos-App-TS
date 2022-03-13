import classes from "./TodoItem.module.css";
import edit from "../icons/edit.svg";
import deleteItem from "../icons/deleteItem.svg";
import React from "react";

const TodoItem: React.FC<{
    text: string;
    onDelete: () => void;
}> = (props) => {
    return (
        <li className={classes.item}>
            {props.text}

            <span onClick={props.onDelete}>
                <img src={deleteItem} height={20} alt="delete" />
            </span>
        </li>
    );
};

export default TodoItem;
