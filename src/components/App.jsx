import React from 'react';
import Form from './Form';
import Filter from './Filter';
import Render from "./Render"
const App=()=>{
    return(
        <div>
            <h1>Phonebook</h1>
            <Form/>
            <Filter/>
            <h2>Contacts</h2>
            <Render/>
        </div>
    )
}
export default App