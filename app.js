const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const productsRouter = require("./routes/productsRouter");

app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}`);
});
