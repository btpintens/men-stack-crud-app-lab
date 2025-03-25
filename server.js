import morgan from "morgan"
import "./db/connection.js";

import DogsRouter from ".controllers/dogs.js";

const PORT = process.env.PORT || "3000"
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.use("/", dogsRouter);

app.listen(PORT, () => {
    console.log(`There are Good Dogs on port: ${PORT}`)
});