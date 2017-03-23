import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to B.I.N. Customer Service.");
});

export default router;