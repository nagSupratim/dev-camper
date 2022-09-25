import { ControllerFunctionType } from "../types";

export const asyncHandler =
  (fn: ControllerFunctionType): ControllerFunctionType =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
