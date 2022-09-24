import { ControllerFunctionType } from "../types";

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export const getBootcamps: ControllerFunctionType = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export const getBootcamp: ControllerFunctionType = (req, res, next) => {
  res.status(200).json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

// @desc      Create a bootcamps
// @route     POST /api/v1/bootcamps
// @access    Private
export const createBootcamp: ControllerFunctionType = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamps" });
};

// @desc      Update single bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
export const updateBootcamp: ControllerFunctionType = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc      Delete single bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
export const deleteBootcamp: ControllerFunctionType = (req, res, next) => {
  res.status(201);
  res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
