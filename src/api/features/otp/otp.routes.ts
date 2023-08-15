import { Hono } from "hono";
import { otpController } from "./otp.controller";

export const Route = new Hono();

Route.get("/create", otpController.create);
Route.get("/verify", otpController.verify);
Route.get("/secret", otpController.getSecret);

export const otpRoute = Route;
