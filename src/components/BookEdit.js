import {useState} from 'react';
import useBookContext from '../hooks/use-books-context';
function BookEdit({book,onSubmit}){
    const [title,setTitle]=useState(book.title);
    const {editBook}=useBookContext();
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit();
        editBook(book.id,title);
    }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
        </form>
}
export default BookEdit;