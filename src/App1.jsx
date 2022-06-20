import Header from "./Header";
import Footer from "./footer";
import Note from "./note";
import "./styles.css";
import CreateArea from "./createArea";
import { useState } from "react";
function App1() {
  const [notes, setnotes] = useState([]);
  function addNote(newNote) {
    setnotes((prevNotes) => {
      return { ...prevNotes, newNote };
    });
  }
  function deleteNote(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App1;
