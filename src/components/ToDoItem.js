export default function ToDoItem( {itemKey, name, handleDeleteItem }) {

    const handleDeleteClick = () => {
        handleDeleteItem(itemKey);
    }
    return (
        <div className="to-do-item">    
            <p key={itemKey}>Key: {itemKey} - Title: {name} - <button onClick={handleDeleteClick}>Delete/Done</button></p>
        </div> 
    );
}