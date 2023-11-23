const express = require('express')

const app = express()

const tasks = [{}]


// Get tasks feature
app.get('/tasks', (req, res)=>{
    const {id} = req.query;
    // const task = tasks.find((task) => task.id)
    return res.status(200).json(tasks)
})

//Create task feature














app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})

