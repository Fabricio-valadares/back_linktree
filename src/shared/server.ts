import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { AppError } from "./error";
import { connectDB } from "./typeorm/index";
import { userRoute } from "./http/router/user.route";
import { sectionRoute } from "./http/router/section.route";
import { cardRoute } from "./http/router/card.route";
import { itensLinkRoute } from "./http/router/itensLink.route";

connectDB();
const app = express();
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", sectionRoute);
app.use("/api", cardRoute);
app.use("/api", itensLinkRoute);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      error: "error",
      message: "Interval error server",
    });
  }
);

app.listen(3333, () => {
  console.log("run server!");
});
