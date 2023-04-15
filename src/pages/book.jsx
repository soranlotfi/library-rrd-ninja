import {useParams} from "react-router-dom";
import {getBook} from "../data/data";
const Book = ()=>{
    const params = useParams()
    const chosenBook = getBook(parseInt(params.bookId))
    console.log(chosenBook)
    // const book = getBook(parseInt(params.bookId))
    return(
        <div className="book-container">
            <h1 className="bookName"> نام کتاب  : {`${chosenBook.name}`}</h1>
            <p className="bookPrice"> قیمت   : {`${chosenBook.amount}`}</p>
            <p className="bookDue"> انتشار   : {`${chosenBook.due}`}</p>
        </div>
    )
}
export default Book;