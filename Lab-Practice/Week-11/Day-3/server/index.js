// const express = require('express')
import React from 'react'
import express from "express";
import { renderToString } from 'react-dom/server'
import { readFileSync } from 'fs';


import { App } from '../client/App';

const data = {
    questions:[{
        questionId:'Q1',
        content:'Should we use Jquery of Fetch for Ajax?'

    },
    {
        questionId:'Q2',
        content:'What is the best feature of React?'
    
    }],
    answers:[{
        answerId:'A1',
        questionId:'Q1',
        upvotes: 2,
        content: "Jquery"
    },{
        answerId:'A2',
        questionId:'Q1',
        upvotes: 1,
        content: "Fetch"
    },{
        answerId:'A3',
        questionId:'Q2',
        upvotes: 1,
        content: "Performance"
    },{
        answerId:'A4',
        questionId:'Q2',
        upvotes: 2,
        content: "Ease of Use"    
    }]
}


const app = new express();

app.use(express.static("dist"));

app.get("/data", async(_req,res) => {

    res.json(data)
})

app.get('/', async (_req, res) => {

    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString (<App {... data}/>);

    res.send(index.replace("{{rendered}}", rendered))


    // res.send (
    //     '<h1> React Is Excellent</h1>'
    // )
})

app.listen(7777); 
console.log("server is listening")