import BookShow from './BookShow';
function BookList({books,onDelete,onEdit}){
    console.log(books);
    const ShowBooks=books.map((book)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
    })
    return <div className="book-list">{ShowBooks}</div>
}
export default BookList;