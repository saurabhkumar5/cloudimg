import express from "express";
import {createVideo,getVideo} from "../controllers/video.js"

const router = express.Router();

router.post("/",createVideo);
router.get("/",getVideo)

export default router;