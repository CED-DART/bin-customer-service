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
    // var jsonDatabase = fs.createReadStream('data.json');

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
    console.log(req.params.id);
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

router.put("/edit", (req, res) => {
    res.send("EDIT PUT");
});

router.get("/delete/:id", (req, res) => {
    res.send("DELETE");
});

router.delete("/delete", (req, res) => {
    res.send("DELETE id");
});

router.get("/view/:id", (req, res) => {

    let id = req.params.id;

    res.send("VIEW" + id);
});

export default router;