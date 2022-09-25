import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils";

export interface ControllerFunctionType {
  (req: Request, res: Response, next: NextFunction): void;
}
export interface ErrorMiddlewareFunctionType {
  (err: any, req: Request, res: Response, next: NextFunction): void;
}

// CONSTANTS
export enum Models {
  Bootcamp = "Bootcamp",
}
