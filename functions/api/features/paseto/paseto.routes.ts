import { Hono } from "hono";
import { pasetoController } from "./paseto.controller";

const Route = new Hono();

Route.get("/token", pasetoController.createToken);
Route.get("/verify", pasetoController.verifyToken);
Route.get("/keys", pasetoController.keyGen);

export const pasetoRoute = Route;
