import React from "react"
// import ReactDOM from "react-dom" // Using for Old Version than 18.*
import {createRoot} from "react-dom/client" // Using for Old Version than 18.*

//import CProduct  from "./ClassProduct" // Import Class Component
import FProduct  from "./FunctionProduct" // Import Function Component
import Cart from "./Cart"

// Styling Imports
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"


// Routing Imports
import {Route, BrowserRouter, Routes} from "react-router-dom"


/*
    // Master Render, using for Old Versions than 18.*
    ReactDOM.render(
        <>
            <CProduct />
            <hr/>
            <FProduct />
        </>
    ,document.querySelector("#root"))
*/

// Master Render, using for New Versions than 18.*
const Root = createRoot(document.querySelector("#root"))
Root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Cart />}> </Route>
            <Route path="/FProduct" element = {<FProduct/>}></Route>
        </Routes>
    </BrowserRouter>
)