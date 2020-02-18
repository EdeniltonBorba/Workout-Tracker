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

