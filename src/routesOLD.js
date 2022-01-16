const { Router } = require('express');

const routes = Router();

//Query params
routes.get('/users', (req,res) => {
    console.log(req.query);
    return res.json({ message: "Hello World" });
});

//Route params
//PUT Tambem dessa maneira
routes.delete('/users/:id', (req,res) => {
    console.log(req.params);
    return res.json({ message: "Hello World" });
});

//Body params
routes.post('/users', (req,res) => {
    console.log(req.body);
    return res.json({ message: "Hello World" });
});

module.exports = routes;