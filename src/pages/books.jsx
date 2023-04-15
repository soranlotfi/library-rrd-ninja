import {getBooks} from "../data/data";
import {NavLink,Link, Outlet} from "react-router-dom";

const Books = () => {
    const bookList = getBooks()
    console.log(bookList)
    return (
        <div className="books">
           <div className="book-links">
               {bookList.map((book) => (
                   <NavLink className="bookLinks-item" key={book.number} to={`book/${book.number}`}>
                       {book.name}
                   </NavLink>))}
           </div>
            <Outlet/>
        </div>)
}

export default Books;