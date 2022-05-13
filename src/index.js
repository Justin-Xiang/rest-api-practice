const express = require("express");
const bodyparser = require("body-parser");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log("API is listining on port: " + PORT);
  V1SwaggerDocs(app, PORT);
});
