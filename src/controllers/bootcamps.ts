import { ErrorResponse } from "../utils";
import { asyncHandler } from "../middlewares";
import { Bootcamp } from "../models/Bootcamp";
import { ControllerFunctionType } from "../types";

// @desc      Get all bootcamps
// @route     GET /api/{version}/bootcamps
// @access    Public
const _getBootcamps: ControllerFunctionType = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  return res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
};

// @desc      Get single bootcamp
// @route     GET /api/{version}/bootcamps/:id
// @access    Public
const _getBootcamp: ControllerFunctionType = async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of : ${req.params.id}`, 404));

  return res.status(200).json({ success: true, data: bootcamp });
};

// @desc      Create a bootcamps
// @route     POST /api/{version}/bootcamps
// @access    Private
const _createBootcamp: ControllerFunctionType = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  return res.status(201).json({ success: true, data: bootcamp });
};

// @desc      Update single bootcamp
// @route     PUT /api/{version}/bootcamps/:id
// @access    Private
const _updateBootcamp: ControllerFunctionType = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of : ${req.params.id}`, 404));

  return res.status(200).json({ success: true, data: bootcamp });
};

// @desc      Delete single bootcamp
// @route     DELETE /api/{version}/bootcamps/:id
// @access    Private
const _deleteBootcamp: ControllerFunctionType = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of : ${req.params.id}`, 404));

  return res.status(200).json({ success: true, data: bootcamp });
};

export const getBootcamps = asyncHandler(_getBootcamps);
export const getBootcamp = asyncHandler(_getBootcamp);
export const createBootcamp = asyncHandler(_createBootcamp);
export const updateBootcamp = asyncHandler(_updateBootcamp);
export const deleteBootcamp = asyncHandler(_deleteBootcamp);
