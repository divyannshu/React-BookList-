import {useState} from 'react';
import useBookContext from '../hooks/use-books-context';
function BookCreate(){
    const [title,setTitle]=useState('');
    const {createBook}=useBookContext();
    const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create</button>
        </form>
        </div>
}
export default BookCreate;