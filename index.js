const express= require("express")
const app = express();

const handlebars = require("express-handlebars");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialDir: __dirname + "views/partials/login",
  })
);
app.set("view engine", "hbs"); // registra el motor de plantillas
app.set("views", "./views"); // especifica el directorio de vistas

const datos=[]

app.get("/", function (req, res) {
  res.render("main", {datos});
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.post('/', (req, res) => {
    datos.push(req.body)
  res.render("main", datos);
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server up"));