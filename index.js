const express = require('express')

const app = express()
app.use(express.json())

const tasks = []


// Get tasks feature
app.get('/tasks', (req, res)=>{
    const {id} = req.query;
    // const task = tasks.find((task) => task.id)
    return res.status(200).json(tasks)
});

//Create task feature
app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    return res.status(201).json(
        {
            success: true,
            message: "Task is successfully created",
        }
    )
});













app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})

