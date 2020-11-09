import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddelware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
