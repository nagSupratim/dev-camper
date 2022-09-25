import { ErrorMiddlewareFunctionType } from "../types";
import { ErrorResponse } from "../utils";

export const errorHandler: ErrorMiddlewareFunctionType = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  error.statusCode = err.statusCode;

  // Mongoose Bad ObjectId
  if (err.name === "CastError") error = new ErrorResponse(`Resource not found with id of ${err.value}`, 404);

  // Mongoose Duplicate Key
  if (err.code === 11000)
    error = new ErrorResponse(`Duplicate Field Value Entered for field : ${Object.keys(err.keyValue)[0]}`, 400);

  // Mongoose Validation Error
  if (err.name === "ValidationError")
    error = new ErrorResponse(
      `Validation Error : ${Object.values(err.errors)
        .map((val: any) => val.message)
        .join(", ")}`,
      400
    );

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
