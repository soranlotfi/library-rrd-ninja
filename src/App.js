import RootLayOut from "./pages/rootlayOut";
import About from "./pages/about";
import Book from "./pages/book";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Books from "./pages/books";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayOut/>} path="/">
            <Route path="/about" element={<About/>}/>
            <Route path="/books" element={<Books/>}>
                <Route  path="book/:bookId" element={<Book/>}/>
                <Route index  element={<main style={{padding: "1rem"}}>
                    <h1 style={{marginRight:"auto"}}>کتاب مورد نظر خودرا انتخاب کنید</h1>
                </main>}/>
            </Route>
        </Route>))

// )

function App() {
    return (<RouterProvider router={Router}/>

    );
}

export default App
