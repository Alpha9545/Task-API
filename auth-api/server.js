require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const setupSwagger = require("./src/config/swagger");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api", require("./src/routes/authRoutes"));
// server.js
app.use("/api/tasks", require("./src/routes/taskRoutes"));


setupSwagger(app);
console.log("Swagger docs available at http://localhost:5000/api-docs");
// Health check
app.get("/", (req, res) => res.send("API is working 🚀"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use("/admin", require("./src/routes/adminRoutes"));
app.use("/auth", authRoutes);

