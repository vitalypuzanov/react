import React from 'react';

function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes App</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + '...'}</p>
            <small className="note-meta">
              {new Date(note.lastModified).toLocaleDateString('ru-RU')}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
