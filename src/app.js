require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const accountsRouter = require("./routes/accounts");
const dashboardRouter = require("./routes/dashboard");
const projectRouter = require("./routes/projects");
const apis = require("./engine/apis/routes/apiRoutes");
const formRouter = require("./routes/forms");
// const { admin, adminRouter } = require("./src/admin/admin");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// admin section

// app.use(admin.options.rootPath, adminRouter);

// console.log(admin.options.rootPath);

app.use("/", indexRouter);
app.use("/accounts", accountsRouter);
app.use("/dashboard", dashboardRouter);
app.use("/projects", projectRouter);
app.use("/client", apis);
app.use("/forms", formRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
