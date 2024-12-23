import BookShow from './BookShow';
import useBookContext from '../hooks/use-books-context';
function BookList(){
    const {books}=useBookContext();
    console.log(books);
    const ShowBooks=books.map((book)=>{
        return <BookShow  key={book.id} book={book}/>
    })
    return <div className="book-list">
        {ShowBooks}
        </div>
}
export default BookList;