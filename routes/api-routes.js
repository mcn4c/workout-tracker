var db = require('../models');

module.exports = (app) => {
	app.get('/api/workouts/range', (req, res) => {
		//aggregate
		db.Workout.aggregate(
			[
				{
					$sort: {
						day: -1
					}
				},
				{
					$limit: 7
				},
				{
					$addFields: {
						totalDuration: {
							$sum: '$exercises.duration'
						}
					}
				},
				{
					$sort: {
						day: 1
					}
				}
			],
			(err, result) => {
				if (err) {
					console.log(err);
					res.send(err);
				} else {
					res.json(result);
				}
			}
		);
	});

	// get exercises
	app.get('/api/workouts', (req, res) => {
		db.Exercise
			.find({})
			.then((dbExercise) => {
				res.json(dbExercise);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
};
