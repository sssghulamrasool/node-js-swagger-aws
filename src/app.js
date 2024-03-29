const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const homeRoutes = require("./routes");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/app-error");
const morgan = require("morgan");
const { swaggerSpec } = require("./swagger");
const app = express();
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", homeRoutes);
app.use("/api/v2/users", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find this url ${req.originalUrl}`, 404));
});

app.use(errorController);

module.exports = app;
