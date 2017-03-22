//import express from 'express';
var express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to B.I.N. Customer Service.");
});

//export default router;
module.exports = router;