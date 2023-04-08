const app = require("./app");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3002;
require("dotenv").config();

connectDB();

// ======================== LISTENING TO SERVER ===========================

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
