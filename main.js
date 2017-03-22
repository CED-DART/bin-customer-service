//require("babel-register");
//require("babel-polyfill");

//import express from 'express';
//import homeController from './router/homeController';

var express = require("express");
var homeController = require("./router/homeController");

const app = express();
const portNumber = 3000;

app.use("/", homeController);

app.listen(portNumber, (error) => {
    console.log("Server run on port " + portNumber);
});