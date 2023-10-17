import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";


function App() {
    return(
        <>
        <div>
            {/* <p>
                Hello, world! This is my first Gatsby site. I am super excited to learn more about the JAMstack and how it can help
                This is a paragraph. This text has been styled using CSS and the style tag in index.html file.
                <h1 style={{color: 'red'}}>Hello World</h1>
            </p> */}
            <Routes>
                <Route path="/" element={
                    <>
                    <Header/>
                    <Home/>
                    </>
                }/>
                <Route path="/About" element={<><Header/>
                    <About/></>
                    }/>
                <Route path="*" element={
                    <>
                    <Header/>
                    <Error/>
                    </>
                }/>
            </Routes>
        </div>
        </>
    )
}

export default App
