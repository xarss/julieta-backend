import { Router } from "@oak/oak";
import { getAll, getApiStatus } from "../controllers/apiC.ts";
import { askGpt } from "../controllers/gptC.ts";

const router = new Router();

router.get("/api", getApiStatus);
router.get("/api/all", getAll);
router.post("/api/gpt", askGpt);

export default router;
