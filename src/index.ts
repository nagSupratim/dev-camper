// Package Imports
import dotenv from "dotenv";
import morgan from "morgan";
import c from "ansi-colors";
import Express from "express";
import { Server } from "http";
import mongoose from "mongoose";

// DB Imports
import { connectDB } from "./config/db";

// Route Imports
import bootcamps from "./routes/bootcamps";

// Middleware Imports

// Load Environment Variables
dotenv.config({ path: "config.env" });

// Creating the Express Application
const app = Express();

// Body Parser
app.use(Express.json());

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

// Connect to the DB and if successful, start server
let server: Server, connection: typeof mongoose;
console.log(c.greenBright(`⚙️  [database]: trying to connect to MongoDB...`));
connectDB().then((con) => {
  connection = con;
  console.log(c.bold(c.greenBright(`⚙️  [database]: MongoDB connected. Host : ${connection.connection.host}`)));

  // start server
  console.log(c.yellowBright(`⚡️ [server]: trying to start Node Server...`));
  server = app.listen(process.env.PORT, () =>
    console.log(
      c.bold(
        c.yellowBright(
          `⚡️ [server]: Server is running in ${process.env.NODE_ENV?.toUpperCase()} mode, on port : ${process.env.PORT}`
        )
      )
    )
  );
});

// Handle unhandled Promise Rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(c.redBright(`❌ [ERROR]: ${err}`));

  if (connection && connection.connections.length > 0) {
    console.error(c.greenBright(`⚙️  [database]: trying to disconnect database connections...`));
    connection.disconnect(() => {
      if (server) {
        console.error(c.greenBright(`⚙️  [database]: database connections disconnected`));

        console.error(c.yellowBright(`⚡️ [server]: trying to close the Server...`));
        server.close(() => {
          console.error(c.yellowBright(`⚡️ [server]: server closed`));

          console.error(c.magentaBright(`⏳ [process]: exiting the process...`));
          process.exit(0);
        });
      }
    });
  }

  console.error(c.magentaBright(`⏳ [process]: exiting the process...`));
  process.exit(0);
});
