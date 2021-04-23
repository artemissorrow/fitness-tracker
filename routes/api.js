// // so much routing
const router = require("express").Router();
const Workout = require("../models/workoutPlan.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", ({ body }, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.get("/api/workouts/range", ({ body }, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
        totalSets: { $sum: "$exercises.sets" },
        totalReps: { $sum: "$exercises.reps" },
        totalDistance: { $sum: "$exercises.distance" }
      }
    }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})  

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: {
        exercises: req.body
      }
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})


// check readme line 27 for helper operators
module.exports = router;


