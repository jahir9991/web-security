import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { otpRoute } from "./api/features/otp/otp.routes";
import { pasetoRoute } from "./api/features/paseto/paseto.routes";

const app = new Hono().basePath("/api");

app.get("/ping", (context) => {
  return context.json(context);
});

app.route("/otp", otpRoute);
app.route("/paseto", pasetoRoute);

export default app;
