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

// Update task features
app.put('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;

    // Find the index of the task with the given ID
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    // If the task with the given ID is found, update it
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
        return res.status(200).json({
            success: true,
            message: "Task is successfully updated",
        });
    } else {
        return res.status(404).json({
            success: false,
            message: "Task not found",
        });
    }
});

// Delete task feature
app.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    // Find the index of the task with the given ID
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    // If the task with the given ID is found, remove it
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return res.status(200).json({
            success: true,
            message: "Task is successfully deleted",
        });
    } else {
        return res.status(404).json({
            success: false,
            message: "Task not found",
        });
    }
}); 












app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})

