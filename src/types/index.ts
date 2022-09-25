import { Request, Response, NextFunction } from "express";

export interface ControllerFunctionType {
  (req: Request, res: Response, next: NextFunction): void;
}

// CONSTANTS
export enum Models {
  Bootcamp = "Bootcamp",
}
