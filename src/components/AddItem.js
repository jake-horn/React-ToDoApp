export default function AddItem( { handleAddItem, text, setText }) {
    const addItem = () => {
        handleAddItem();
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="add-item-container">
            <input className="add-item-input" type="text" value={text} onChange={handleChange}></input>
            <button className="add-item-button" onClick={addItem}>+</button>
        </div>
    )
}