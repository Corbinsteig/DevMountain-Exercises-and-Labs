import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import { hydrateRoot } from 'react-dom/client';

let state = undefined;

fetch("http://localhost:7777/data")
.then(data => data.json())
.then(json => {

        state = json;
        console.log("Got the state", state);
        render();

})


// ReactDOM.render(<App/>, document.querySelector("#Container"));

function handleModifyAnswerVotes(answerId, increment) {

    state.answers = state.answers.map(answer => {
        if (answer.answerId !== answerId) {
            return answer;
        } else {
            return {...answer, upvotes:answer.upvotes + increment}
        }
    })

    render();
}

function render() {
    
    ReactDOM.hydrateRoot(<App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes}/>, document.querySelector('#Container'))
}


// render();