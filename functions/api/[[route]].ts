import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

import { otpRoute } from "./features/otp/otp.routes";
import { pasetoRoute } from "./features/paseto/paseto.routes";

const app = new Hono().basePath("/api");

app.get("/ping", (context) => {
  return context.json(context);
});

app.route("/otp", otpRoute);
app.route("/paseto", pasetoRoute);

export const onRequest = handle(app);
