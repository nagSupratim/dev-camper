import { Bootcamp } from "../models/Bootcamp";
import { ControllerFunctionType } from "../types";

// @desc      Get all bootcamps
// @route     GET /api/{version}/bootcamps
// @access    Public
export const getBootcamps: ControllerFunctionType = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    return res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// @desc      Get single bootcamp
// @route     GET /api/{version}/bootcamps/:id
// @access    Public
export const getBootcamp: ControllerFunctionType = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) return res.status(404).json({ success: false, error: `No Bootcamp found by id : ${req.params.id}` });
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(200).json({ success: false, error });
  }
};

// @desc      Create a bootcamps
// @route     POST /api/{version}/bootcamps
// @access    Private
export const createBootcamp: ControllerFunctionType = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    return res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// @desc      Update single bootcamp
// @route     PUT /api/{version}/bootcamps/:id
// @access    Private
export const updateBootcamp: ControllerFunctionType = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) return res.status(404).json({ success: false, error: `No Bootcamp found by id : ${req.params.id}` });
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(200).json({ success: false, error });
  }
};

// @desc      Delete single bootcamp
// @route     DELETE /api/{version}/bootcamps/:id
// @access    Private
export const deleteBootcamp: ControllerFunctionType = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) return res.status(404).json({ success: false, error: `No Bootcamp found by id : ${req.params.id}` });
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(200).json({ success: false, error });
  }
};
