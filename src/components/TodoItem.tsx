import classes from "./TodoItem.module.css";
import deleteItem from "../icons/deleteItem.svg";
import React from "react";

const TodoItem: React.FC<{
    text: string;
    onDelete: () => void;
}> = (props) => {
    return (
        <li className={classes.item}>
            {props.text}

            <div onClick={props.onDelete}>
                <img src={deleteItem} height={20} alt="delete" />
            </div>
        </li>
    );
};

export default TodoItem;
