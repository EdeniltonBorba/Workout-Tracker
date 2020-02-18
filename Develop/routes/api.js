const router = require("express").Router();
const path = require("path");
const { workout } = require("../models/index");

router.post("/api/workouts", ({ body }, res) => {
    workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts:id", (req, res) => {
    workout.findByIdAndUpdate(req.params.id, { exercises: req.body })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    workout.find({})
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



