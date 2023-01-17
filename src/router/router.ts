import {Router} from "express";
import {productRouter} from "./product-router";
import {userRouter} from "./user-router";
import HomeController from "../controller/HomeController";

export const router = Router();

router.get('/home', HomeController.showHome);
router.get('/homeUser', HomeController.showHomeUser);

router.use('/products', productRouter);
router.use('/users', userRouter);
