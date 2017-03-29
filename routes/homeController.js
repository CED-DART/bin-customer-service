import express from 'express';
import data from '../data.json'
const router = express.Router();

router.get("/", (req, res) => {
    res.render('pages/index',data);
});

router.get("/create", (req, res) => {
    res.send("create");
});

router.post("/create", (req, res) => {
    res.send(201);
});

router.get("/edit/:id", (req, res) => {
    res.send("EDIT");
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

router.get("view/:id", (req, res) => {
    res.send("VIEW");
});

export default router;