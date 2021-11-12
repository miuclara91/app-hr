const express = require("express");
const { getCandidates, getCandidateById, updateCandidate } = require("./dynamo");
const app = express();

app.get("/", (req, res) => {
    res.send("HELLO");
});

app.get("/candidates", async (req, res) => {
    try {
        const candidates = await getCandidates();
        res.json(candidates);
    } catch (error) {
        console.log(error);
        res.status(500).json({err: "Algo salió mal"})
    }
});

app.get("/candidates/:id", async (req, res) => {
    const id = req.params.id;
   
    try {
        const candidate = await getCandidateById(id);
        res.json(candidate);
    } catch (error) {
        console.log(error);
        res.status(500).json({err: "Algo salió mal"})
    }
});

app.put("/candidates/:id", async (req, res) => {
    const candidate = req.body;
    const {id} = req.params;
    candidate.id = id;
    try {
        const newChange = await updateCandidate(candidate);
        res.json(newChange);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Algo salió mal" });
    }
});

const port = process.env.PORT || 4000;
 app.listen(port, ()=>{
     console.log("LISTENING");
 });