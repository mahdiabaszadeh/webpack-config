import "../styles/index.scss";

import React from 'react'
import Recipies from "./Recipies";
function App() {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>
                        I'm with React
                    </h1>
                </section>
            </main>

            <Recipies />
        </>
    )
}

export default App
