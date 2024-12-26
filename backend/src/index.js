
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// route import
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app,server,io } from "./lib/socket.js";

dotenv.config();



app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT || 5001;

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



// server running
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
