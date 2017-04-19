import express from 'express';
import data from '../data.json'
import customerService from '../models/CustomerService'
import fs from 'fs';

const router = express.Router();

router.get("/", (req, res) => {
    res.render('pages/index', { data: data });
});

router.get("/create", (req, res) => {
    res.render("pages/create");
});

router.post("/create", (req, res) => {

    let nextId = 1;
    data.map((row, index) => {
        let id = Number.parseInt(row.id);
        if (id > nextId) {
            nextId = id;
        }
    });

    var model = new customerService();
    model.id = (nextId + 1).toString();
    model.title = req.body.title;
    model.company = req.body.company;
    model.description = req.body.description;
    model.resolved = req.body.resolved ? true : false;
    model.promiseSolutionDate = req.body.promiseSolutionDate;

    data.push(model);

    fs.writeFile('data.json', JSON.stringify(data), (error) => {

    });

    res.redirect("/");
});

router.get("/edit/:id", (req, res) => {

    let model = new customerService();
    data.map((row, index) => {
        let id = Number.parseInt(row.id);
        if (id == req.params.id) {
        console.log("!");
            
            model = row;
        }
    });
        console.log(model);
    
    res.render('pages/edit', { data: model });
});

router.post("/edit", (req, res) => {
    
    let newData = data.find((data) => {
        return (data.id == req.body.id);
     });

    newData.title = req.body.title;
    newData.company = req.body.company;
    newData.description = req.body.description;
    newData.resolved = req.body.resolved ? true : false;
    newData.promiseSolutionDate = req.body.promiseSolutionDate;

    data.map((row, index) => {
        if (row.id == req.body.id)
            row = newData;
    });

    fs.writeFile('data.json', JSON.stringify(data), (error) => {
    });
    
    res.redirect("/");
});

router.get("/delete/:id", (req, res) => {
    let dataToDelete = data.find((data) => {
        return (data.id == req.params.id);
     });

     res.render('pages/delete', { 'data': dataToDelete});
});

router.post("/delete", (req, res) => {
    let indexToDelete = data.findIndex((data) => {
        return (data.id == req.body.id);
     });

     data.splice(indexToDelete, 1);

     fs.writeFile('data.json', JSON.stringify(data));

     res.redirect("/");
});

router.get("/view/:id", (req, res) => {
    let dataToView = data.find((data) => {
        return (data.id == req.params.id);
     });

     res.render('pages/view', { 'data': dataToView});
});

export default router;