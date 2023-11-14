import { useState } from 'react';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import './styles.css';

export default function App() {
  const [todoItems, setToDoItems] = useState([]);
  const [text, setText] = useState('');
  const [currentKey, setCurrentKey] = useState(0);

  const handleAddItem = () => {
    setCurrentKey(currentKey + 1);
    
    setToDoItems([
      ...todoItems, 
      {key: currentKey, text: text}
    ]);
  }

  const handleDeleteItem = (itemKey) => {
    setToDoItems(todoItems.filter(items => items.key !== itemKey));
  }

  return (
    <div className="container">
      <AddItem handleAddItem={handleAddItem} text={text} setText={setText} />
      <ToDoList toDoListItems={todoItems} handleDeleteItem={handleDeleteItem}/>
    </div>
  );
}