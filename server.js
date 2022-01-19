const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const defaultLang = "en";
const PORT = 8080;

const app = express();

const sess = {
  // genid: function (req) {
  //   return genuuid(); // use UUIDs for session IDs
  // },

  cookie: { maxAge: 86400000 },
  store: new MemoryStore({ checkPeriod: 86400000 }),
  secret: "circus",
  resave: false,
  saveUninitialized: true,
};

const { db } = require("./db/dbs");
const { redirect } = require("express/lib/response");
// const { MemoryStore } = require("express-session");
const req = require("express/lib/request");

app.use(helmet());

app.set("view engine", "ejs");
// app.set("trust proxy", 1); // trust first proxy

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

app.use(compression()); //Compress all routes
app.use("/static", express.static("public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.listen(process.env.PORT || PORT, () => {
  console.log(`skann listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(db);
});

app.get("/", (req, res) => {
  const templateVars = {
    db,
  };
  res.render("index", templateVars);
});
