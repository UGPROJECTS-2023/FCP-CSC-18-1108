import express from "express";
import multer from "multer";
import requireLecturer from "../../middleware/requireLecturer";
import requireUser from "../../middleware/requireUser";
import {
  createSymptomHandler, deleteSymptomHandler, getAllSymptomHandler, getSingleSymptomHandler, hasMalariaHandler
} from "./symptom.controller";
const router = express.Router();

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const file = multer({ storage: imageStorage }).single("file");

router.post("/",  createSymptomHandler);
router.post("/has-malaria",  hasMalariaHandler);
router.get("/", getAllSymptomHandler);
router.get("/:symptom_Id",  getSingleSymptomHandler);
router.delete("/:symptom_Id",  deleteSymptomHandler);


export default router;
