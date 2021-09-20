import './App.css';
import { useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import uuid from 'react'

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  
  const onAddNote = () => {
    const newNote={
      id: uuid(),
      title: "Untitled Node",
      body: "",
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes]);
  };


  const onDeleteNote = (id) =>{
    setNotes(notes.filter((note) => note.id !== id));
  };

   


  
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main/>
    </div>
  );
}

export default App;
