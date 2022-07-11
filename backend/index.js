const express = require("express");
const productRoutes = require("./routes/products");

const app = express();

app.use(express.json());

//logs requests made
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
