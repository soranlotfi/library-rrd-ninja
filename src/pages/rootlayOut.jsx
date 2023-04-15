import {Link, NavLink, Outlet} from "react-router-dom";

const RootLayOut=()=>{
   return(
       <div className="root-layout">
           <h1>کتابخانه ی من </h1>
           <nav className="top-menu">
               <NavLink className="navLink" to="/books">کتاب ها </NavLink>
               <NavLink className="navLink" to="/about">درباره ی ما </NavLink>
           </nav>
           <main>
               <Outlet/>
           </main>
       </div>
   )
}

export default RootLayOut