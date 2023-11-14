import ToDoItem from "./ToDoItem";

export default function ToDoList( {toDoListItems, handleDeleteItem}) {
    return (
        <div className="to-do-list">
            <div>
                {toDoListItems.map(items => (<ToDoItem key={items.key} itemKey={items.key} name={items.text} handleDeleteItem={handleDeleteItem} />))}
            </div>
        </div>
    )
}