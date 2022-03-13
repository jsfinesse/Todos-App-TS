import classes from "./TodoItem.module.css";
import edit from "../icons/edit.svg";
import deleteItem from "../icons/deleteItem.svg";

const TodoItem: React.FC<{ text: string }> = (props) => {
    return (
        <li className={classes.item}>
            {props.text}
            
            <span>
                <img src={deleteItem} height={20} alt="delete" />
            </span>
            
        </li>
    );
};

export default TodoItem;
