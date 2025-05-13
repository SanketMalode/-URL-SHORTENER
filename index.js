const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const { URL } = require("./Models/UserModel.js");
const URLRoute = require("./Routers/ModelRouters.js");
const { checkforauth, restictToUser } = require("./Middlewares/auth.js");
const static_Router = require("./Routers/Static_Router.js");

const UserRouter = require("./Routers/user.js");

const { ConnectMongoDB } = require("./Connection.js");
const { connect } = require("mongoose");
port = 3000;

ConnectMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB Connect");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(checkforauth);

app.use("/url", restictToUser(["NORMAL", "ADMIN"]), URLRoute);
app.use("/user", UserRouter);
app.use("/", static_Router);

app.get("/test", async (req, res) => {
  const allurl = await URL.find({});
  return res.render("index", { urls: allurl });
});

app.get("/:shortid", async (req, res) => {
  const shortid = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      ShortID: shortid,
    },
    {
      $push: {
        VisitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).json({ msg: "Short URL not found" });
  }
  res.redirect(entry.RedirectURL);
});

app.listen(port, () => {
  console.log("Server is created at " + port);
});
