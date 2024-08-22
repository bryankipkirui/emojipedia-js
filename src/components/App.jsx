import React from "react";
import './App.css'
import Entry from "./entry";
import myArray from "../emojipedi";

function EmojiInfo(response){
    return(
        <Entry 
        key = {response.id}
        emoji = {response.emoji}
        name = {response.name}
        meaning = {response.meaning}
        />
    );
}

function App(){
    return(
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
        <dl className="dictionary">
            {myArray.map(EmojiInfo)}
        </dl>
        </div>
    );
}

export default App;