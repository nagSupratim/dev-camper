import { Router } from "express";
import { createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp } from "../controllers/bootcamps";

const router = Router();

router.route("/").get(getBootcamps).post(createBootcamp);
router.route("/:id").get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

export default router;
